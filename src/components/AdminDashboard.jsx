import React, { useEffect, useState } from "react";
import { getAllSetup, search, deleteSetup } from "../services/SetupServices";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import VideoTable from "./SetupTable";

export default function AdminDashboard() {
  const [setups, setSetups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadSetups();
  }, []);

  const loadSetups = async () => {
    const data = await getAllSetup();
    setSetups(data);
  };

  const handleSearch = async () => {
    const res = await search(searchTerm.trim());
    if (res.length > 0) {
      navigate("/search-result", { state: res[0] });
    }
  };

  const handleDelete = async (id) => {
    await deleteSetup(id);
    loadSetups();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 border-b border-blue-500 pb-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-400 drop-shadow-lg tracking-wide">
            🧰 DevFix Admin Panel
          </h1>
          <p className="text-sm text-gray-400 mt-1 pl-1">Manage your setups with power and style.</p>
        </div>

        <button
          onClick={() => navigate("/add")}
          className="bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-6 py-2 rounded-lg shadow-md hover:from-green-400 hover:to-green-300 hover:scale-105 transform transition-all duration-200"
        >
          ➕ Add Setup
        </button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>

      {/* Table */}
      <div className="border border-blue-500 rounded-xl shadow-2xl p-4 bg-gray-800">
        <h2 className="text-xl font-semibold text-blue-300 mb-4 pl-2">📋 Setup List</h2>
        <VideoTable setups={setups} onDelete={handleDelete} navigate={navigate} />
      </div>
    </div>
  );
}
