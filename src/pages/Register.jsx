import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/SetupServices';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      setMessage("❌ Registration failed. Try again.");
      console.error("Error in registration", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 border border-blue-500 rounded-xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center">📝 Create your DevFix Account</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
  {/* Name */}
  <div className="flex items-center bg-black/40 border border-blue-500 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
    <FaUser className="text-blue-400 mr-2" />
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
    />
  </div>

  {/* Email */}
  <div className="flex items-center bg-black/40 border border-blue-500 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
    <FaEnvelope className="text-blue-400 mr-2" />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      required
      className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
    />
  </div>

  {/* Password */}
  <div className="flex items-center bg-black/40 border border-blue-500 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
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

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow-md transition"
  >
    Register
  </button>
</form>


        {/* Link to Login */}
        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
