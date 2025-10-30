import React, { createContext, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TimetablePage from '../pages/TimetablePage';
import { getCurrentUser } from '../utils/localStorage';

// Create context for app functions
const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Protected Route component
function ProtectedRoute({ children }) {
  const user = getCurrentUser();
  return user ? children : <Navigate to="/login" replace />;
}

// Public Route component (redirect to timetable if already logged in)
function PublicRoute({ children }) {
  const user = getCurrentUser();
  return user ? <Navigate to="/timetable" replace /> : children;
}

function AppRouter({ onLoginSuccess, onRegisterSuccess }) {
  return (
    <AppContext.Provider value={{ onLoginSuccess, onRegisterSuccess }}>
      <Routes>
        {/* Public routes */}
        <Route 
          path="/" 
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/timetable" 
          element={
            <ProtectedRoute>
              <TimetablePage />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default AppRouter;
