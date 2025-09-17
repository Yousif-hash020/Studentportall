import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Pages/Dashboard";
import Attendance from "./Pages/Attendance";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetail";
import Result from "./Pages/Result";
import { AppProvider } from "./context/AppContext";
import ProfileDetails from "./Pages/ProfileDetails";
import Login from "./Pages/Login";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<ProfileDetails />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
