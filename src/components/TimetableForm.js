import React, { useState, useEffect } from "react";

function TimetableForm({ onSubmit, initialData, onCancel }) {
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setSubject(initialData.subject || "");
      setRoom(initialData.room || "");
      setDayOfWeek(initialData.dayOfWeek || "");
      setStartTime(initialData.startTime || "");
      setEndTime(initialData.endTime || "");
    } else {
      setSubject("");
      setRoom("");
      setDayOfWeek("");
      setStartTime("");
      setEndTime("");
    }
    setErrors({});
  }, [initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!subject.trim()) {
      newErrors.subject = "Tên môn học không được để trống";
    } else if (subject.trim().length < 2) {
      newErrors.subject = "Tên môn học phải có ít nhất 2 ký tự";
    }

    if (!dayOfWeek) {
      newErrors.dayOfWeek = "Vui lòng chọn thứ trong tuần";
    }

    if (!startTime) {
      newErrors.startTime = "Vui lòng chọn giờ bắt đầu";
    }

    if (!endTime) {
      newErrors.endTime = "Vui lòng chọn giờ kết thúc";
    } else if (startTime && endTime && startTime >= endTime) {
      newErrors.endTime = "Giờ kết thúc phải sau giờ bắt đầu";
    }

    if (!room.trim()) {
      newErrors.room = "Phòng học không được để trống";
    } else if (room.trim().length < 2) {
      newErrors.room = "Tên phòng học phải có ít nhất 2 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const timeString = `${dayOfWeek}, ${startTime} - ${endTime}`;
      onSubmit({
        subject: subject.trim(),
        time: timeString,
        room: room.trim(),
        dayOfWeek,
        startTime,
        endTime,
      });
    }
  };

  const formStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
    marginBottom: "20px",
  };

  const inputGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#495057",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const errorStyle = {
    color: "#dc3545",
    fontSize: "14px",
    marginTop: "5px",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "white",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
    color: "white",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={{ marginTop: "0", marginBottom: "20px", color: "#495057" }}>
        {initialData ? "Chỉnh Sửa Môn Học" : "Thêm Môn Học Mới"}
      </h3>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Tên Môn Học:</label>
        <input
          type="text"
          placeholder="Ví dụ: Toán học, Vật lý, Hóa học..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={inputStyle}
        />
        {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Thứ trong tuần:</label>
        <select
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
          style={inputStyle}
        >
          <option value="">Chọn thứ</option>
          <option value="Thứ 2">Thứ 2</option>
          <option value="Thứ 3">Thứ 3</option>
          <option value="Thứ 4">Thứ 4</option>
          <option value="Thứ 5">Thứ 5</option>
          <option value="Thứ 6">Thứ 6</option>
          <option value="Thứ 7">Thứ 7</option>
          <option value="Chủ nhật">Chủ nhật</option>
        </select>
        {errors.dayOfWeek && <div style={errorStyle}>{errors.dayOfWeek}</div>}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ ...inputGroupStyle, flex: 1 }}>
          <label style={labelStyle}>Giờ bắt đầu:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            style={inputStyle}
          />
          {errors.startTime && <div style={errorStyle}>{errors.startTime}</div>}
        </div>

        <div style={{ ...inputGroupStyle, flex: 1 }}>
          <label style={labelStyle}>Giờ kết thúc:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            style={inputStyle}
          />
          {errors.endTime && <div style={errorStyle}>{errors.endTime}</div>}
        </div>
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Phòng Học:</label>
        <input
          type="text"
          placeholder="Ví dụ: A101, B205, Lab 3..."
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          style={inputStyle}
        />
        {errors.room && <div style={errorStyle}>{errors.room}</div>}
      </div>

      <div style={buttonGroupStyle}>
        <button type="submit" style={primaryButtonStyle}>
          {initialData ? "Cập Nhật" : "Thêm Môn Học"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={secondaryButtonStyle}>
            Hủy
          </button>
        )}
      </div>
    </form>
  );
}

export default TimetableForm;
