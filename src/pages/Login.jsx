import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/SetupServices";
import { FaLock, FaEnvelope } from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      setFormData({ email: "", password: "" });
      navigate("/home");
      console.log("Token:", response.token);
    } catch (err) {
      setMessage("❌ Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 border border-blue-500 rounded-xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center">🔐 DevFix Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="flex items-center bg-black/40 border border-blue-500 rounded px-3 py-2">
            <FaEnvelope className="text-blue-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-black/40 border border-blue-500 rounded px-3 py-2">
            <FaLock className="text-blue-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded font-semibold hover:scale-105 transition-transform"
          >
            Login
          </button>

          {/* Error Message */}
          {message && (
            <p className="text-sm text-red-400 text-center mt-2">{message}</p>
          )}
        </form>

        {/* Link to Register */}
        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}
