import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin Components
import AdminDashboard from "./components/AdminDashboard";
import AddSetup from "./components/AddSetup";
import EditSetup from "./components/EditSetup";
import SearchResultPage from "./components/SearchResultPage";
import GeminiAssistant from './components/GeminiAssistant';
import Register from "./pages/Register";
import Login from "./pages/Login";

// User Components
import HomePage from "./components/HomePage";

// Global Styles
import "./App.css";

function App() {
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const isAdmin = roles.includes("ADMIN"); // ✅ Check admin status

  return (
    <Router>
      <Routes>
        {/* Public + User Side */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/assistant" element={<GeminiAssistant />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-result" element={<SearchResultPage />} />

        {/* Protected Admin Side */}
        <Route path="/" element={isAdmin ? <AdminDashboard /> : <Navigate to="/home" />} />
        <Route path="/add" element={isAdmin ? <AddSetup /> : <Navigate to="/home" />} />
        <Route path="/edit/:id" element={isAdmin ? <EditSetup /> : <Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
