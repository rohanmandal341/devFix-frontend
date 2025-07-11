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
          title="⚛ React + Tailwind Setup"
          desc="Clean install of React via Vite, integrate Tailwind, and configure your dev tools to work with live reload and component routing."
        />

        {/* 🔹 Card 2 */}
        <VideoCard
          poster={Img3}
          video="/videos/springboot-setup.mp4"
          title="☕ Spring Boot + MySQL"
          desc="End-to-end guide for Spring Boot backend setup with database, Maven, layered architecture, and secured APIs."
        />

        {/* 🔹 Card 3 */}
        <VideoCard
          poster={Img2}
          video="/videos/vscode-plugins.mp4"
          title="🧩 VS Code & Dev Tools"
          desc="Setup essential extensions, configure GitHub, formatters, run Java & React in one IDE, and boost your development workflow."
        />

        {/* 🔹 Card 4 */}
        <VideoCard
          poster={Img6}
          video="/videos/react-download.mp4"
          title="📦 Create React App vs Vite"
          desc="Compare CRA and Vite for real-world performance, DX, Tailwind compatibility, and deployment efficiency."
        />

        {/* 🔹 Card 5 */}
        <VideoCard
          poster={Img5}
          video="/videos/springboot-setup.mp4"
          title="🧪 Spring Boot API Testing"
          desc="Learn to build REST APIs and test with Postman, set status codes, CORS configs, and global exception handlers."
        />

        {/* 🔹 Card 6 */}
        <VideoCard
          poster={Img7}
          video="/videos/vscode-plugins.mp4"
          title="🚀 VS Code Power Shortcuts"
          desc="Master keyboard shortcuts, multi-cursor editing, debugger setup, and live server tweaks in VS Code."
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
