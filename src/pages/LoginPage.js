import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/fetchTimetables';
import { useApp } from '../router';

function LoginPage() {
  const { onLoginSuccess } = useApp();
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await login(formData);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      onLoginSuccess(response.user);
    } catch (error) {
      setMessage(error.message || 'Đăng nhập thất bại. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#495057',
    fontSize: '28px',
    fontWeight: '600'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '8px',
    color: '#495057',
    fontWeight: '500',
    fontSize: '14px'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'border-color 0.2s'
  };

  const errorInputStyle = {
    ...inputStyle,
    borderColor: '#dc3545'
  };

  const errorStyle = {
    color: '#dc3545',
    fontSize: '14px',
    marginTop: '5px'
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    cursor: 'not-allowed'
  };

  const switchStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: '#6c757d'
  };

  const switchLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const messageStyle = {
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb'
  };

  const demoStyle = {
    backgroundColor: '#d1ecf1',
    border: '1px solid #bee5eb',
    borderRadius: '4px',
    padding: '15px',
    marginBottom: '20px'
  };

  const demoTitleStyle = {
    color: '#0c5460',
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '14px'
  };

  const demoTextStyle = {
    color: '#0c5460',
    fontSize: '13px',
    margin: '4px 0'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🔐 Đăng Nhập</h2>
      
      <div style={demoStyle}>
        <div style={demoTitleStyle}>💡 Tài khoản demo:</div>
        <div style={demoTextStyle}>Email: admin@example.com</div>
        <div style={demoTextStyle}>Mật khẩu: admin123</div>
      </div>

      {message && (
        <div style={messageStyle}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email của bạn"
            style={errors.email ? errorInputStyle : inputStyle}
            disabled={loading}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            style={errors.password ? errorInputStyle : inputStyle}
            disabled={loading}
          />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={loading ? disabledButtonStyle : buttonStyle}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = '#0056b3';
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = '#007bff';
            }
          }}
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
        </button>
      </form>

      <div style={switchStyle}>
        Chưa có tài khoản?{' '}
        <Link 
          to="/register"
          style={switchLinkStyle}
        >
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;