
import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Student Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">My Courses</h2>
          <p className="mt-2 text-gray-600">
            View your enrolled courses.
          </p>
          <Link to="/student/my-courses"
            className="mt-4 inline-block text-blue-600">
            View Courses
          </Link>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">My Progress</h2>
          <p className="mt-2 text-gray-600">
            Track your learning progress.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Continue Learning</h2>
          <p className="mt-2 text-gray-600">
            Resume your learning journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;