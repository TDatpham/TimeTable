import React, { useEffect, useState } from "react";
import { fetchTimetables, createTimetable, updateTimetable, deleteTimetable } from "../api/fetchTimetables";
import TimetableList from "../components/TimetableList";
import TimetableForm from "../components/TimetableForm";
import TimetableStats from "../components/TimetableStats";
import HelpModal from "../components/HelpModal";
import SortInfo from "../components/SortInfo";

function TimetablePage() {
  const [timetables, setTimetables] = useState([]);
  const [filteredTimetables, setFilteredTimetables] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTimetable, setEditingTimetable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDay, setFilterDay] = useState("");
  const [sortBy, setSortBy] = useState("day"); // day, time, subject, room
  const [sortOrder, setSortOrder] = useState("asc"); // asc, desc
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Chỉ load timetables khi đã đăng nhập
    const token = localStorage.getItem('token');
    if (token) {
      loadTimetables();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    filterTimetables();
  }, [timetables, searchTerm, filterDay, sortBy, sortOrder]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadTimetables = async () => {
    try {
      setLoading(true);
      const data = await fetchTimetables();
      setTimetables(data);
    } catch (error) {
      console.error("Error fetching timetables:", error);
      if (error.message.includes('No authentication token')) {
        showMessage("Vui lòng đăng nhập để xem thời khóa biểu!", "error");
        // Redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
      } else {
        showMessage("Không thể tải thời khóa biểu. Vui lòng thử lại!", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const filterTimetables = () => {
    let filtered = timetables;

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      filtered = filtered.filter(timetable =>
        timetable.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        timetable.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
        timetable.time.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Lọc theo thứ trong tuần
    if (filterDay) {
      filtered = filtered.filter(timetable =>
        timetable.time.toLowerCase().includes(filterDay.toLowerCase())
      );
    }

    // Sắp xếp dữ liệu
    filtered = sortTimetables(filtered, sortBy, sortOrder);

    setFilteredTimetables(filtered);
  };

  const sortTimetables = (data, sortBy, sortOrder) => {
    return [...data].sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'day':
          // Sắp xếp theo thứ trong tuần
          const dayOrder = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
          aValue = dayOrder.indexOf(a.dayOfWeek || a.time.split(',')[0]?.trim());
          bValue = dayOrder.indexOf(b.dayOfWeek || b.time.split(',')[0]?.trim());
          break;
        case 'time':
          // Sắp xếp theo giờ bắt đầu
          aValue = a.startTime || '00:00';
          bValue = b.startTime || '00:00';
          break;
        case 'subject':
          // Sắp xếp theo tên môn học
          aValue = a.subject.toLowerCase();
          bValue = b.subject.toLowerCase();
          break;
        case 'room':
          // Sắp xếp theo phòng học
          aValue = a.room.toLowerCase();
          bValue = b.room.toLowerCase();
          break;
        default:
          return 0;
      }

      // Xử lý giá trị null/undefined
      if (aValue === -1) aValue = 999;
      if (bValue === -1) bValue = 999;

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  };

  const showMessage = (msg, type = "info") => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleAdd = () => {
    setEditingTimetable(null);
    setShowForm(true);
  };

  const handleEdit = (timetable) => {
    setEditingTimetable(timetable);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa môn học này?")) {
      try {
        await deleteTimetable(id);
        await loadTimetables();
        showMessage("Đã xóa môn học thành công!", "success");
      } catch (error) {
        console.error("Error deleting timetable:", error);
        if (error.message.includes('No authentication token') || error.response?.status === 401) {
          showMessage("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!", "error");
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.reload();
        } else {
          showMessage("Không thể xóa môn học. Vui lòng thử lại!", "error");
        }
      }
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingTimetable) {
        await updateTimetable(editingTimetable._id, formData);
        showMessage("Đã cập nhật môn học thành công!", "success");
      } else {
        await createTimetable(formData);
        showMessage("Đã thêm môn học thành công!", "success");
      }
      setShowForm(false);
      setEditingTimetable(null);
      await loadTimetables();
    } catch (error) {
      console.error("Error saving timetable:", error);
      if (error.response?.status === 401) {
        showMessage("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!", "error");
        // Không tự động đăng xuất, để người dùng tự quyết định
        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.reload();
        }, 3000);
      } else if (error.message.includes('No authentication token')) {
        showMessage("Vui lòng đăng nhập để thêm môn học!", "error");
      } else {
        showMessage("Không thể lưu môn học. Vui lòng thử lại!", "error");
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTimetable(null);
  };

  const messageStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 20px",
    borderRadius: "6px",
    color: "white",
    fontWeight: "500",
    zIndex: 1000,
    backgroundColor: message.includes("thành công") ? "#28a745" : "#dc3545",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    animation: "slideIn 0.3s ease-out"
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {message && (
        <div style={messageStyle}>
          {message}
          <style>
            {`
              @keyframes slideIn {
                from {
                  transform: translateX(100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
            `}
          </style>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Thời Khóa Biểu Cá Nhân</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={() => setShowHelp(true)}
            style={{
              padding: "10px 15px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            📚 Hướng dẫn
          </button>
          <button 
            onClick={handleAdd}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            + Thêm Môn Học
          </button>
        </div>
      </div>

      {/* Thanh tìm kiếm và lọc */}
      <div style={{ 
        display: "flex", 
        gap: "15px", 
        marginBottom: "20px", 
        flexWrap: "wrap",
        alignItems: "center"
      }}>
        <div style={{ flex: "1", minWidth: "200px" }}>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên môn, phòng học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />
        </div>
        <div style={{ minWidth: "150px" }}>
          <select
            value={filterDay}
            onChange={(e) => setFilterDay(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          >
            <option value="">Tất cả thứ</option>
            <option value="Thứ 2">Thứ 2</option>
            <option value="Thứ 3">Thứ 3</option>
            <option value="Thứ 4">Thứ 4</option>
            <option value="Thứ 5">Thứ 5</option>
            <option value="Thứ 6">Thứ 6</option>
            <option value="Thứ 7">Thứ 7</option>
            <option value="Chủ nhật">Chủ nhật</option>
          </select>
        </div>
        {(searchTerm || filterDay) && (
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterDay("");
            }}
            style={{
              padding: "10px 15px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Thanh sắp xếp */}
      <div 
        className="sort-controls"
        style={{ 
          display: "flex", 
          gap: "15px", 
          marginBottom: "20px", 
          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #dee2e6"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontWeight: "500", color: "#495057" }}>Sắp xếp theo:</span>
        </div>
        <div style={{ minWidth: "150px" }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          >
            <option value="day">Thứ trong tuần</option>
            <option value="time">Giờ bắt đầu</option>
            <option value="subject">Tên môn học</option>
            <option value="room">Phòng học</option>
          </select>
        </div>
        <div style={{ minWidth: "120px" }}>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          >
            <option value="asc">Tăng dần</option>
            <option value="desc">Giảm dần</option>
          </select>
        </div>
        <button
          onClick={() => {
            setSortBy("day");
            setSortOrder("asc");
          }}
          style={{
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          🔄 Đặt lại
        </button>
      </div>

      {loading && <p>Đang tải...</p>}

      {/* Thông tin sắp xếp */}
      <SortInfo 
        sortBy={sortBy} 
        sortOrder={sortOrder} 
        totalItems={filteredTimetables.length} 
      />

      {/* Thống kê */}
      <TimetableStats subjects={filteredTimetables} />

      {showForm && (
        <TimetableForm 
          onSubmit={handleSubmit}
          initialData={editingTimetable}
          onCancel={handleCancel}
        />
      )}

      <TimetableList 
        subjects={filteredTimetables} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <HelpModal 
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  );
}

export default TimetablePage;
