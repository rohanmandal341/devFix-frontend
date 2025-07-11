import React from "react";

export default function VideoCard({ video }) {
  if (!video) return null;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg border border-blue-500 mt-6">
      <h2 className="text-2xl font-bold mb-2 text-blue-400">{video.title}</h2>
      <p className="text-gray-300 mb-1">{video.description}</p>
      <p className="text-sm text-gray-400 mb-3">{video.solution}</p>

      {/* Embedded YouTube Video (Already formatted URL) */}
      <iframe
        src={video.video}
        title="YouTube Embed"
        width="100%"
        height="300"
        allowFullScreen
        className="rounded-md border border-blue-500"
      ></iframe>
    </div>
  );
}
