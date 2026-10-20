
import { Navigate, Outlet } from 'react-router-dom';

// Temporary mock authentication
const mockUser = {
  isAuthenticated: true,
  role: 'student',
};

function ProtectedRoute({ allowedRoles }) {
  if (!mockUser.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles &&
    !allowedRoles.includes(mockUser.role)
  ) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;