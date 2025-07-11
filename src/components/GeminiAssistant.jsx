// src/components/GeminiAssistant.jsx
import React, { useState } from "react";
import { askGemini } from "../services/SetupServices";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function GeminiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

const handleAsk = async () => {
  if (!input.trim()) return;
  try {
    const res = await askGemini(input);
    console.log("Gemini response:", res); // ✅ Check what exactly comes
    setResponse(res.text || "No response.");
  } catch (err) {
    console.error("Gemini error:", err);
    setResponse("Something went wrong. Try again later.");
  }
};



  return (
   <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">

      {/* Toggle Button */}
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg animate-bounce"
        >
          <FaCommentDots size={24} />
        </button>
      ) : (
        <div className="w-80 bg-gray-900 text-white rounded-xl border border-blue-500 shadow-2xl p-4 space-y-3 animate-fade-in-up">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-blue-400">🤖 Gemini Assistant</h2>
            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-gray-400 hover:text-red-400" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="h-32 overflow-y-auto text-sm p-2 bg-gray-800 rounded">
            {response ? <p>{response}</p> : <p className="text-gray-500">Ask me your dev doubts.</p>}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-3 py-1.5 bg-gray-700 border border-blue-500 rounded text-sm focus:outline-none"
            />
            <button
              onClick={handleAsk}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
