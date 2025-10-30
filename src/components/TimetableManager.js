import React, { useState } from "react";
import TimetableForm from "./TimetableForm";

function TimetableManager() {
  const [timetables, setTimetables] = useState([]); // danh sách môn học
  const [editingIndex, setEditingIndex] = useState(null); // môn đang chỉnh sửa

  const handleAddTimetable = (data) => {
    if (editingIndex !== null) {
      // cập nhật môn học
      const updated = [...timetables];
      updated[editingIndex] = data;
      setTimetables(updated);
      setEditingIndex(null);
    } else {
      // thêm môn học mới
      setTimetables([...timetables, data]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updated = timetables.filter((_, i) => i !== index);
    setTimetables(updated);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <TimetableForm
        onSubmit={handleAddTimetable}
        initialData={editingIndex !== null ? timetables[editingIndex] : null}
        onCancel={editingIndex !== null ? handleCancel : null}
      />

      <h3 style={{ marginTop: "30px" }}>Danh Sách Thời Khóa Biểu</h3>
      {timetables.length === 0 ? (
        <p>Chưa có môn học nào.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {timetables.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#f1f3f5",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <strong>{item.subject}</strong> ({item.time}) - {item.room}
              <div style={{ marginTop: "8px" }}>
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#ffc107",
                    cursor: "pointer",
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TimetableManager;
