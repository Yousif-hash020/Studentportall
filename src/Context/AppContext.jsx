import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user] = useState({

    name: "Muhmmad Yousaf",
  email: "Yousaf@gmail.com",
  phone: "+92 300 1234567",
  rollNo: "CSSE-18-123",
  faculty: "Computer Science ",
  program: "BS Computer Science",
  semester: "6th Semester",
  cgpa: 3.37,
  earnedCredits: 69,
  totalCredits: 133,
  inProgress: 15,
  });

  const [courses] = useState({
    program: "BS Computer Science",
    semester: "Spring 2025",
    totalCourses: 6,
    active: 6,
    withdraw: 0,
    currentCredits: 10,
    totalCredits: 10,
  });

  return (
    <AppContext.Provider value={{ user, courses }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
