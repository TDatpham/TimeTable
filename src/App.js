import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getCurrentUser, initializeDefaultData } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize default data and check for current user
  useEffect(() => {
    initializeDefaultData();
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    navigate('/timetable');
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    navigate('/timetable');
  };

  // Check if current route is a public route
  // const isPublicRoute = ['/', '/login', '/register'].includes(location.pathname);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar user={user} onLogout={handleLogout} />
      
      <main style={{ flex: 1 }}>
        <AppRouter 
          onLoginSuccess={handleLoginSuccess}
          onRegisterSuccess={handleRegisterSuccess}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
