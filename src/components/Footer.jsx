import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-blue-400 border-t border-blue-500 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* 🔵 Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">DevFix</h2>
          <p className="text-gray-400 leading-relaxed">
            Your go-to platform to fix dev setups, errors, and configurations with real solutions.
          </p>
        </div>

        {/* 📚 Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Video Tutorials</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* 🔧 Tools */}
        <div>
          <h3 className="text-white font-semibold mb-3">Tools</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">React Setup</a></li>
            <li><a href="#">Spring Boot Setup</a></li>
            <li><a href="#">VS Code Plugins</a></li>
            <li><a href="#">API Docs</a></li>
          </ul>
        </div>

        {/* 📞 Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Careers</a></li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#"><FaGithub className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Note */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © 2025 DevFix. All rights reserved.
      </div>
    </footer>
  );
}
