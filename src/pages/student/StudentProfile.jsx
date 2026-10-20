
import React, { useState } from "react";

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Student Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;