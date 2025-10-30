import React from "react";

function TimetableList({ subjects, onEdit, onDelete }) {
  if (!subjects || subjects.length === 0) {
    return (
      <div style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "2px dashed #dee2e6"
      }}>
        <p style={{ fontSize: "18px", color: "#6c757d", margin: "0" }}>
          {subjects === null ? "Đang tải..." : "Không tìm thấy môn học nào."}
        </p>
        <p style={{ fontSize: "14px", color: "#adb5bd", margin: "10px 0 0 0" }}>
          {subjects === null ? "Vui lòng chờ..." : "Hãy thử thay đổi từ khóa tìm kiếm hoặc thêm môn học mới!"}
        </p>
      </div>
    );
  }

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const headerStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px",
    textAlign: "left",
    fontWeight: "600"
  };

  const cellStyle = {
    padding: "12px 15px",
    borderBottom: "1px solid #dee2e6",
    verticalAlign: "middle"
  };

  const actionCellStyle = {
    ...cellStyle,
    textAlign: "center",
    width: "150px"
  };

  const buttonStyle = {
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0 3px"
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffc107",
    color: "#212529"
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "white"
  };

  const rowStyle = {
    transition: "background-color 0.2s"
  };

  const hoverRowStyle = {
    ...rowStyle,
    backgroundColor: "#f8f9fa"
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>STT</th>
            <th style={headerStyle}>Tên Môn Học</th>
            <th style={headerStyle}>Thời Gian</th>
            <th style={headerStyle}>Phòng Học</th>
            <th style={headerStyle}>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr 
              key={subject._id || subject.id} 
              style={index % 2 === 0 ? rowStyle : hoverRowStyle}
              onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = "#f8f9fa"}
              onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = index % 2 === 0 ? "white" : "#f8f9fa"}
            >
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>
                <strong>{subject.subject}</strong>
              </td>
              <td style={cellStyle}>{subject.time}</td>
              <td style={cellStyle}>{subject.room}</td>
              <td style={actionCellStyle}>
                <button 
                  onClick={() => onEdit(subject)}
                  style={editButtonStyle}
                  title="Chỉnh sửa môn học"
                >
                  ✏️ Sửa
                </button>
                <button 
                  onClick={() => onDelete(subject._id || subject.id)}
                  style={deleteButtonStyle}
                  title="Xóa môn học"
                >
                  🗑️ Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimetableList;
