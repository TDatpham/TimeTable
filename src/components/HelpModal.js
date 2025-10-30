import React from 'react';

function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '2px solid #e9ecef'
  };

  const titleStyle = {
    margin: 0,
    color: '#495057',
    fontSize: '24px',
    fontWeight: '600'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#6c757d',
    padding: '5px',
    borderRadius: '4px',
    transition: 'background-color 0.2s'
  };

  const sectionStyle = {
    marginBottom: '25px'
  };

  const sectionTitleStyle = {
    color: '#007bff',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const listStyle = {
    paddingLeft: '20px',
    margin: '10px 0'
  };

  const listItemStyle = {
    marginBottom: '8px',
    color: '#495057',
    lineHeight: '1.5'
  };

  const highlightStyle = {
    backgroundColor: '#fff3cd',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: '500'
  };

  const codeStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '14px',
    border: '1px solid #e9ecef'
  };

  const tipStyle = {
    backgroundColor: '#d1ecf1',
    border: '1px solid #bee5eb',
    borderRadius: '6px',
    padding: '15px',
    margin: '15px 0'
  };

  const tipTitleStyle = {
    color: '#0c5460',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>📚 Hướng Dẫn Sử Dụng</h2>
          <button 
            style={closeButtonStyle}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            ✕
          </button>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            🎯 Tổng Quan
          </h3>
          <p style={{ color: '#495057', lineHeight: '1.6', margin: '10px 0' }}>
            Ứng dụng Thời Khóa Biểu giúp bạn quản lý lịch học cá nhân một cách dễ dàng và hiệu quả. 
            Tất cả dữ liệu được lưu trữ trên trình duyệt của bạn, không cần kết nối internet.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            ➕ Thêm Môn Học
          </h3>
          <ol style={listStyle}>
            <li style={listItemStyle}>Nhấn nút <span style={highlightStyle}>"Thêm Môn Học"</span></li>
            <li style={listItemStyle}>Điền đầy đủ thông tin:
              <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                <li style={listItemStyle}><strong>Tên môn học:</strong> Ví dụ: Toán học, Vật lý</li>
                <li style={listItemStyle}><strong>Thứ trong tuần:</strong> Chọn từ danh sách</li>
                <li style={listItemStyle}><strong>Giờ bắt đầu và kết thúc:</strong> Sử dụng định dạng 24h</li>
                <li style={listItemStyle}><strong>Phòng học:</strong> Ví dụ: A101, B205, Lab 3</li>
              </ul>
            </li>
            <li style={listItemStyle}>Nhấn <span style={highlightStyle}>"Thêm Môn Học"</span> để lưu</li>
          </ol>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            🔍 Tìm Kiếm và Lọc
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Tìm kiếm:</strong> Gõ tên môn học, phòng học hoặc thời gian vào ô tìm kiếm
            </li>
            <li style={listItemStyle}>
              <strong>Lọc theo thứ:</strong> Chọn thứ trong tuần từ dropdown để xem môn học của ngày đó
            </li>
            <li style={listItemStyle}>
              <strong>Xóa bộ lọc:</strong> Nhấn nút <span style={highlightStyle}>"Xóa bộ lọc"</span> để hiển thị tất cả
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            📊 Sắp Xếp Thời Khóa Biểu
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Sắp xếp theo thứ:</strong> Hiển thị môn học theo thứ tự từ Thứ 2 đến Chủ nhật
            </li>
            <li style={listItemStyle}>
              <strong>Sắp xếp theo giờ:</strong> Hiển thị môn học theo giờ bắt đầu từ sớm đến muộn
            </li>
            <li style={listItemStyle}>
              <strong>Sắp xếp theo tên môn:</strong> Hiển thị môn học theo thứ tự bảng chữ cái
            </li>
            <li style={listItemStyle}>
              <strong>Sắp xếp theo phòng:</strong> Hiển thị môn học theo tên phòng học
            </li>
            <li style={listItemStyle}>
              <strong>Thứ tự:</strong> Chọn "Tăng dần" hoặc "Giảm dần" để đảo ngược thứ tự
            </li>
            <li style={listItemStyle}>
              <strong>Đặt lại:</strong> Nhấn nút <span style={highlightStyle}>"🔄 Đặt lại"</span> để về sắp xếp mặc định
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            ✏️ Chỉnh Sửa và Xóa
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Sửa:</strong> Nhấn nút <span style={highlightStyle}>"✏️ Sửa"</span> để chỉnh sửa thông tin môn học
            </li>
            <li style={listItemStyle}>
              <strong>Xóa:</strong> Nhấn nút <span style={highlightStyle}>"🗑️ Xóa"</span> và xác nhận để xóa môn học
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            📊 Thống Kê
          </h3>
          <p style={{ color: '#495057', lineHeight: '1.6', margin: '10px 0' }}>
            Phần thống kê hiển thị:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Tổng số môn học</li>
            <li style={listItemStyle}>Số phòng học khác nhau</li>
            <li style={listItemStyle}>Tổng giờ học trong tuần</li>
            <li style={listItemStyle}>Trung bình giờ học mỗi ngày</li>
            <li style={listItemStyle}>Số môn học theo từng thứ</li>
          </ul>
        </div>

        <div style={tipStyle}>
          <div style={tipTitleStyle}>
            💡 Mẹo Sử Dụng
          </div>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li style={listItemStyle}>Sử dụng định dạng thời gian 24h (ví dụ: <span style={codeStyle}>14:30</span>)</li>
            <li style={listItemStyle}>Tên phòng học nên ngắn gọn và dễ nhớ</li>
            <li style={listItemStyle}>Kiểm tra thống kê để đảm bảo lịch học hợp lý</li>
            <li style={listItemStyle}>Dữ liệu được tự động lưu trên trình duyệt</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>
            🔒 Bảo Mật Dữ Liệu
          </h3>
          <p style={{ color: '#495057', lineHeight: '1.6', margin: '10px 0' }}>
            Tất cả dữ liệu được lưu trữ cục bộ trên trình duyệt của bạn. 
            Để đảm bảo không mất dữ liệu, hãy thường xuyên xuất dữ liệu hoặc sao lưu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;