import React from 'react';

function Navbar({ user, onLogout }) {
  const navbarStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '0'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const welcomeStyle = {
    fontSize: '16px',
    margin: 0
  };

  const logoutButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s'
  };

  const loginPromptStyle = {
    fontSize: '16px',
    margin: 0,
    textAlign: 'center',
    flex: 1
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>
          📚 Thời Khóa Biểu
        </h1>
        
        {user ? (
          <div style={userInfoStyle}>
            <p style={welcomeStyle}>
              👋 Xin chào, <strong>{user.name}</strong>
            </p>
            <button 
              style={logoutButtonStyle}
              onClick={onLogout}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              🚪 Đăng xuất
            </button>
          </div>
        ) : (
          <p style={loginPromptStyle}>
            Vui lòng đăng nhập để sử dụng ứng dụng
          </p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;