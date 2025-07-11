import React from "react";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";

export default function InfoSection() {
  return (
    <section className="bg-gray-900 text-white px-6 md:px-20 py-20 border-b border-blue-500">
      {/* 🔵 Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-blue-400 drop-shadow mb-5 tracking-wide">
          🎓 Master React, Spring Boot, and Tools
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
          Learn the most essential setups — fast-track your skills in full-stack development with guided video walkthroughs.
        </p>
      </div>

      {/* 🎬 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 🔹 Card 1 */}
        <VideoCard
          poster={Img1}
          video="/videos/react-download.mp4"
          title="🔹 How to Install shadcn/ui in React Project"
          desc="Learn how to quickly set up and use shadcn/ui components in your React project built with Vite. Enhance your UI with clean, customizable components."


        />

        {/* 🔹 Card 2 */}
        <VideoCard
          poster={Img3}
          video="/videos/springboot-setup.mp4"
          title="🔹 Tailwind CSS Setup with CLI"
          desc="Install and configure Tailwind CSS using the CLI method for any frontend project. This is a beginner-friendly, step-by-step guide."
        />

        {/* 🔹 Card 3 */}
        <VideoCard
          poster={Img2}
          video="/videos/vscode-plugins.mp4"
          title="🔹 Full Stack Setup: Next.js + Spring Boot"
          desc="Build a complete full stack application using Spring Boot for the backend and Next.js for the frontend. Learn how to connect both seamlessly."
        />

        {/* 🔹 Card 4 */}
        <VideoCard
          poster={Img6}
          video="/videos/react-download.mp4"
          title="🔹 How to Install Python on Linux"
          desc="A quick guide to installing Python on Linux distributions using terminal commands. Perfect for backend or scripting development."
        />

        {/* 🔹 Card 5 */}
        <VideoCard
          poster={Img5}
          video="/videos/springboot-setup.mp4"
          title="🔹 Install VS Code on Windows (Beginner Guide)"
          desc="Step-by-step instructions to download and install Visual Studio Code on Windows, including setting up essential extensions."
        />

        {/* 🔹 Card 6 */}
        <VideoCard
          poster={Img7}
          video="/videos/vscode-plugins.mp4"
          title="🔹 Python Programming Setup Guide"
          desc="Set up your Python development environment with the right editor, tools, and best practices for beginners starting their coding journey."
        />
      </div>
    </section>
  );
}

function VideoCard({ poster, video, title, desc }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-blue-500 shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
      <video
        controls
        className="w-full h-56 object-cover border-b border-blue-500"
        preload="metadata"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold text-blue-400">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
