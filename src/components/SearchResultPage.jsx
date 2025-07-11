import React, { useState } from "react";
import { askGemini } from "../services/SetupServices";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaSearch,
  FaCommentDots,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";

export default function SearchResultPage() {
  const { state: video } = useLocation();
  const navigate = useNavigate();

  const [openChat, setOpenChat] = useState(false);
  const [geminiInput, setGeminiInput] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");

  const handleAskGemini = async () => {
    if (!geminiInput.trim()) return;
    const res = await askGemini(geminiInput);
    setGeminiResponse(res.response || "No response from Gemini.");
  };

  if (!video) {
    return (
      <div className="text-center text-white bg-gray-900 min-h-screen p-10">
        <h2 className="text-2xl mb-4">No video data found.</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          🔙 Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto border border-blue-500 p-6 rounded-lg shadow-lg bg-gray-800">
        {/* 🔹 Left Section */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold text-blue-400 border-b border-blue-500 pb-2">
            {video.title}
          </h1>

          <p className="text-gray-300">{video.description}</p>

          <iframe
            src={video.video}
            title="Search Result Video"
            width="100%"
            height="400"
            allowFullScreen
            className="rounded-md border border-blue-500 shadow-md"
          ></iframe>

          {/* 🔘 Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/")}
              className="bg-black hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md"
            >
              🔙 Back to Dashboard
            </button>
            <button
              onClick={() => setOpenChat(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md animate-bounce flex items-center gap-2"
            >
              <FaCommentDots /> Ask Gemini
            </button>
          </div>

          {/* 💬 Gemini Assistant Modal */}
        {openChat && (
  <>
    {/* 🟦 Background Overlay */}
    <div
      onClick={() => setOpenChat(false)}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40"
    ></div>

    {/* 🟦 Gemini Chat Box */}
    <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-blue-500 rounded-xl p-6 w-[22rem] shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-blue-400">Gemini Assistant</h2>
        <button onClick={() => setOpenChat(false)}>
          <FaTimes className="text-red-400 hover:text-red-600" />
        </button>
      </div>
      <div className="bg-gray-800 p-3 h-24 overflow-y-auto rounded mb-3 text-sm">
        {geminiResponse || "Ask anything about your setup..."}
      </div>
      <div className="flex gap-2">
        <input
          value={geminiInput}
          onChange={(e) => setGeminiInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-3 py-2 text-sm bg-gray-700 rounded border border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleAskGemini}
          className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  </>
)}

        </div>

        {/* 🔸 Right Section: Solution */}
        <div className="bg-gray-900 border border-blue-500 rounded-md p-4 h-full shadow-lg">
          <h2 className="text-xl font-semibold text-blue-400 mb-2 border-b border-blue-500 pb-1">
            🧩 Solution
          </h2>
          <p className="text-gray-300 whitespace-pre-wrap overflow-y-auto max-h-[80vh] pr-2">
            {video.solution}
          </p>
        </div>
      </div>
    </div>
  );
}
