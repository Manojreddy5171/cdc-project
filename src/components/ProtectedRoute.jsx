import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return <Navigate to="/admin-login" replace />;
  }
  
  // If logged in, render the child components (the dashboard)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;