import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '30px 20px',
    marginTop: '50px',
    borderTop: '3px solid #007bff'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  };

  const sectionStyle = {
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#007bff'
  };

  const textStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#adb5bd',
    marginBottom: '8px'
  };

  // const linkStyle = {
  //   color: '#adb5bd',
  //   textDecoration: 'none',
  //   fontSize: '14px',
  //   transition: 'color 0.2s'
  // };

  const bottomStyle = {
    borderTop: '1px solid #495057',
    marginTop: '30px',
    paddingTop: '20px',
    textAlign: 'center',
    color: '#adb5bd',
    fontSize: '14px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h4 style={titleStyle}>📚 Thời Khóa Biểu</h4>
          <p style={textStyle}>
            Ứng dụng quản lý lịch học cá nhân đơn giản, tiện lợi và hoàn toàn miễn phí.
          </p>
          <p style={textStyle}>
            Được phát triển với React và lưu trữ dữ liệu cục bộ.
          </p>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>🚀 Tính Năng</h4>
          <p style={textStyle}>• Quản lý thời khóa biểu</p>
          <p style={textStyle}>• Tìm kiếm và lọc thông minh</p>
          <p style={textStyle}>• Thống kê chi tiết</p>
          <p style={textStyle}>• Lưu trữ cục bộ an toàn</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>💡 Hướng Dẫn</h4>
          <p style={textStyle}>• Đăng ký tài khoản miễn phí</p>
          <p style={textStyle}>• Thêm môn học vào lịch</p>
          <p style={textStyle}>• Sử dụng tính năng tìm kiếm</p>
          <p style={textStyle}>• Xem thống kê lịch học</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>🔒 Bảo Mật</h4>
          <p style={textStyle}>
            Dữ liệu được lưu trữ cục bộ trên trình duyệt của bạn.
          </p>
          <p style={textStyle}>
            Không có dữ liệu nào được gửi lên server.
          </p>
          <p style={textStyle}>
            Chỉ bạn mới có thể truy cập thông tin của mình.
          </p>
        </div>
      </div>

      <div style={bottomStyle}>
        <p style={{ margin: 0 }}>
          © 2024 Thời Khóa Biểu App. Được phát triển với ❤️ cho cộng đồng học tập.
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>
          Sử dụng React, Local Storage và các công nghệ web hiện đại.
        </p>
      </div>
    </footer>
  );
}

export default Footer;