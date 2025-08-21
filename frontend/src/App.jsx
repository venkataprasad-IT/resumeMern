import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import EditResume from "./pages/EditResume";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary"; // ✅ Add this import

const App = () => {
  return (
    <UserProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume/:id" element={<EditResume />} />
          <Route path="/edit-resume/:id" element={<EditResume />} />
          <Route path="/build-resume/:id" element={<ResumeBuilder />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </ErrorBoundary>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
};

export default App;
