
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicLayout from '../layouts/PublicLayout';

import Home from '../pages/public/Home';
import CourseCatalog from '../pages/public/CourseCatalog';
import CourseDetail from '../pages/public/CourseDetail';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import StudentDashboard from '../pages/student/StudentDashboard';
import CoursePlayer from '../pages/student/CoursePlayer';
import CartCheckout from '../pages/student/CartCheckout';
import StudentProfile from '../pages/student/StudentProfile';

import InstructorDashboard from '../pages/instructor/InstructorDashboard';
import CourseBuilder from '../pages/instructor/CourseBuilder';
import LectureUpload from '../pages/instructor/LectureUpload';

import NotFound from '../pages/errors/NotFound';

function AppRoutes() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Student pages */}
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/course/:courseId" element={<CoursePlayer />} />
        <Route path="/student/cart" element={<CartCheckout />} />
        <Route path="/student/profile" element={<StudentProfile />} />
      </Route>

      {/* Instructor pages */}
      <Route element={<ProtectedRoute allowedRoles={['instructor']} />}>
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses/manage" element={<CourseBuilder />} />
        <Route path="/instructor/courses/:courseId/lectures" element={<LectureUpload />} />
      </Route>
      <Route element={<PublicLayout />}>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;