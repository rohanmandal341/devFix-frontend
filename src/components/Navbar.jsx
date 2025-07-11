import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const isAdmin = roles.includes("ADMIN");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    navigate("/home");
  };

  return (
    <nav className="bg-gray-900 text-white px-10 py-4 border-b mt-0.5 border-blue-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          onClick={() => navigate("/home")}
          className="text-3xl font-bold text-blue-400 tracking-wide cursor-pointer"
        >
          DevFix
        </h1>

        <div className="flex items-center gap-6">
          {["Home", "Docs", "Support"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-blue-400 transition-all"
            >
              {item}
            </a>
          ))}

          {/* ✅ Show Dashboard if ADMIN */}
          {isAdmin && (
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm px-4 py-2 rounded font-bold shadow"
            >
              Dashboard
            </button>
          )}

          {!token ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white text-sm px-4 py-2 rounded font-medium shadow hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-white text-blue-600 text-sm px-4 py-2 rounded font-medium shadow hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white text-sm px-4 py-2 rounded font-medium shadow hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
