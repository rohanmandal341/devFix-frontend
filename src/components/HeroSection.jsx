import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../services/SetupServices";
import { FaBolt, FaSearch } from "react-icons/fa";
import BgImage from "../assets/bg.jpg";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (!searchTerm.trim()) return;

    try {
      const result = await search(searchTerm.trim());
      if (result.length > 0) {
        // ✅ Pass all matching results, not just the first one
        navigate("/search-result", { state: result });
      } else {
        alert("No matching setup found.");
      }
    } catch (err) {
      alert("Search failed. Please login again.");
      navigate("/login");
    }
  };

  return (
    <div
      className="relative h-[90vh] mt-0.5 w-full bg-cover bg-center border-b border-blue-600"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* 🟦 Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0" />

      {/* 🟦 Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
          <FaBolt className="text-orange-400 text-4xl drop-shadow-lg animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 drop-shadow-md tracking-tight">
            Setup Errors? Solved Instantly.
          </h1>
        </div>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-150">
          Just type your error, tool, or setup issue — and DevFix finds the exact video,
          solution code, or docs you need. Instant clarity, zero noise.
        </p>

        {/* 🔍 Search Input + Button */}
        <div className="flex flex-col md:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search error, tool, or keyword..."
            className="px-6 py-3 w-80 md:w-96 text-white bg-black/80 border border-blue-500 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition-all"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
