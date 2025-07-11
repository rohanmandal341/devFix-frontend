import React, { useState } from "react";
import { askGemini } from "../services/SetupServices";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function SearchResultPage() {
  const { state: videos } = useLocation();
  const navigate = useNavigate();

  const [openChatIndex, setOpenChatIndex] = useState(null);
  const [geminiInput, setGeminiInput] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");

  const handleAskGemini = async () => {
    if (!geminiInput.trim()) return;
    const res = await askGemini(geminiInput);
    setGeminiResponse(res.response || "No response from Gemini.");
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center text-white bg-gray-900 min-h-screen p-10">
        <h2 className="text-2xl mb-4">No matching setups found.</h2>
        <button
          onClick={() => navigate("/admin")}
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          🔙 Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-blue-500 pb-4 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-wide">
          🔎 Search Results ({videos.length})
        </h1>
        <button
          onClick={() => navigate("/admin")}
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* 🔁 One-by-one stacked responsive cards */}
      <div className="space-y-10">
        {videos.map((video, index) => (
          <div
            key={video.id || index}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto border border-blue-500 p-4 sm:p-6 rounded-lg shadow-lg bg-gray-800"
          >
            {/* 🔹 Left (Video + Info) */}
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-400 border-b border-blue-500 pb-2">
                {video.title}
              </h1>

              <p className="text-gray-300 text-sm">{video.description}</p>

              <div className="w-full aspect-video border border-blue-500 rounded shadow">
                <iframe
                  src={video.video}
                  title={video.title}
                  className="w-full h-full rounded"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  onClick={() => navigate("/admin")}
                  className="bg-black hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md text-sm"
                >
                  🔙 Back
                </button>
                <button
                  onClick={() => setOpenChatIndex(index)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 text-sm"
                >
                  <FaCommentDots /> Ask Gemini
                </button>
              </div>
            </div>

            {/* 🔸 Right (Solution) */}
            <div className="bg-gray-900 border border-blue-500 rounded-md p-4 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 border-b border-blue-500 pb-1">
                🧩 Solution
              </h2>
              <p className="text-gray-300 whitespace-pre-wrap overflow-y-auto max-h-[80vh] pr-2 text-sm">
                {video.solution || "No solution available."}
              </p>
            </div>

            {/* 💬 Gemini Chat Modal */}
            {openChatIndex === index && (
              <>
                <div
                  onClick={() => setOpenChatIndex(null)}
                  className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40"
                ></div>

                <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-blue-500 rounded-xl p-6 w-[90%] sm:w-[22rem] shadow-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-blue-400">Gemini Assistant</h2>
                    <button onClick={() => setOpenChatIndex(null)}>
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
        ))}
      </div>
    </div>
  );
}
