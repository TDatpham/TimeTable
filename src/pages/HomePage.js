import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '60px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    border: '1px solid #e9ecef'
  };

  const heroTitleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '20px',
    lineHeight: '1.2'
  };

  const heroSubtitleStyle = {
    fontSize: '20px',
    color: '#6c757d',
    marginBottom: '30px',
    lineHeight: '1.5'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  };

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #e9ecef',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const featureIconStyle = {
    fontSize: '48px',
    marginBottom: '20px'
  };

  const featureTitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#495057',
    marginBottom: '15px'
  };

  const featureDescriptionStyle = {
    color: '#6c757d',
    lineHeight: '1.6',
    fontSize: '16px'
  };

  const ctaStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
    marginBottom: '40px'
  };

  const ctaTitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const ctaTextStyle = {
    fontSize: '18px',
    marginBottom: '25px',
    opacity: '0.9'
  };

  const ctaButtonStyle = {
    backgroundColor: 'white',
    color: '#007bff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  const infoStyle = {
    backgroundColor: '#e9ecef',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const infoTitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#495057',
    marginBottom: '15px'
  };

  const infoTextStyle = {
    color: '#6c757d',
    lineHeight: '1.6',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={heroTitleStyle}>
          📚 Quản Lý Thời Khóa Biểu
        </h1>
        <p style={heroSubtitleStyle}>
          Ứng dụng quản lý lịch học cá nhân đơn giản, tiện lợi và hoàn toàn miễn phí
        </p>
      </div>

      <div style={featuresStyle}>
        <div style={featureCardStyle}>
          <div style={featureIconStyle}>📅</div>
          <h3 style={featureTitleStyle}>Lập Lịch Dễ Dàng</h3>
          <p style={featureDescriptionStyle}>
            Thêm, chỉnh sửa và quản lý thời khóa biểu của bạn một cách trực quan và đơn giản
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={featureIconStyle}>🔍</div>
          <h3 style={featureTitleStyle}>Tìm Kiếm Thông Minh</h3>
          <p style={featureDescriptionStyle}>
            Tìm kiếm môn học theo tên, phòng học hoặc lọc theo thứ trong tuần
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={featureIconStyle}>📊</div>
          <h3 style={featureTitleStyle}>Thống Kê Chi Tiết</h3>
          <p style={featureDescriptionStyle}>
            Xem thống kê tổng quan về lịch học, số giờ học và phân bố theo ngày
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={featureIconStyle}>💾</div>
          <h3 style={featureTitleStyle}>Lưu Trữ Cục Bộ</h3>
          <p style={featureDescriptionStyle}>
            Dữ liệu được lưu trữ trên trình duyệt, không cần kết nối internet
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={featureIconStyle}>🔒</div>
          <h3 style={featureTitleStyle}>Bảo Mật Cao</h3>
          <p style={featureDescriptionStyle}>
            Dữ liệu cá nhân được bảo vệ, chỉ bạn mới có thể truy cập
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={featureIconStyle}>📱</div>
          <h3 style={featureTitleStyle}>Responsive Design</h3>
          <p style={featureDescriptionStyle}>
            Giao diện thân thiện trên mọi thiết bị: máy tính, tablet, điện thoại
          </p>
        </div>
      </div>

      <div style={ctaStyle}>
        <h2 style={ctaTitleStyle}>Bắt Đầu Ngay Hôm Nay!</h2>
        <p style={ctaTextStyle}>
          Đăng ký tài khoản miễn phí và bắt đầu quản lý thời khóa biểu của bạn
        </p>
        <Link 
          to="/register"
          style={ctaButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f8f9fa';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Đăng Ký Miễn Phí
        </Link>
      </div>

      <div style={infoStyle}>
        <h3 style={infoTitleStyle}>💡 Tại Sao Chọn Ứng Dụng Của Chúng Tôi?</h3>
        <p style={infoTextStyle}>
          Ứng dụng Thời Khóa Biểu được thiết kế đặc biệt cho học sinh, sinh viên và giáo viên. 
          Với giao diện đơn giản, dễ sử dụng và các tính năng mạnh mẽ, 
          bạn có thể dễ dàng quản lý lịch học của mình mà không cần lo lắng về việc mất dữ liệu.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
