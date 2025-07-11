import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search setups..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 w-1/2 rounded-md bg-gray-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <button
        onClick={onSearch}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:scale-105 transition-transform shadow-md"
      >
        🔍 Search
      </button>
    </div>
  );
}
