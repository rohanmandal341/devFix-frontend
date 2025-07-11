import React, { useState } from "react";
import { create } from "../services/SetupServices";
import { useNavigate } from "react-router-dom";

export default function AddSetup() {
  const [setup, setSetup] = useState({
    title: "",
    description: "",
    solution: "",
    video: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSetup({ ...setup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(setup);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl border border-blue-500 shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          ➕ Add New Setup
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            value={setup.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-blue-500 text-sm"
          />

          {/* Description */}
          <textarea
            name="description"
            value={setup.description}
            onChange={handleChange}
            placeholder="Short Description"
            rows={2}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-blue-500 text-sm resize-none"
          />

          {/* Solution */}
          <textarea
            name="solution"
            value={setup.solution}
            onChange={handleChange}
            placeholder="Full Solution / Code"
            rows={4}
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-blue-500 text-sm resize-none"
          />

          {/* Video URL */}
          <input
            type="text"
            name="video"
            value={setup.video}
            onChange={handleChange}
            placeholder="Video URL (YouTube or hosted)"
            className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-blue-500 text-sm"
          />

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded font-semibold hover:scale-105 transition-transform"
            >
              🚀 Submit Setup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
