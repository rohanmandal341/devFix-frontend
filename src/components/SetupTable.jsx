import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function SetupTable({ setups, onDelete }) {
  const navigate = useNavigate();

  // 🔍 Filter out empty entries before rendering
  const validSetups = setups.filter(
    (s) => s.title && s.description && s.solution && s.video
  );

  if (validSetups.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-8">🚫 No setup data found.</p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6 shadow-lg rounded-lg border border-blue-500">
      <table className="w-full table-auto text-left text-white bg-gray-900 border-collapse">
        <thead className="bg-gray-800 border-b border-blue-400">
          <tr>
            <th className="px-4 py-3 border-r border-blue-500">🎯 Title</th>
            <th className="px-4 py-3 border-r border-blue-500">📄 Description</th>
            <th className="px-4 py-3 border-r border-blue-500">🛠️ Solution</th>
            <th className="px-4 py-3 border-r border-blue-500">📹 Video</th>
            <th className="px-4 py-3">⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {validSetups.map((setup) => (
            <tr
              key={setup.id}
              className="border-t border-blue-500 hover:bg-gray-800"
            >
              <td className="px-4 py-2 border-r border-blue-500">{setup.title}</td>
              <td className="px-4 py-2 border-r border-blue-500">{setup.description}</td>
              <td className="px-4 py-2 truncate max-w-xs border-r border-blue-500">
                {setup.solution}
              </td>
              <td className="px-4 py-2 border-r border-blue-500">
                <a
                  href={setup.video}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline hover:brightness-150 transition-all"
                >
                  ▶ Watch
                </a>
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => navigate(`/edit/${setup.id}`)}
                  className="text-yellow-600 px-2 py-1 rounded hover:bg-yellow-300"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure to delete this setup?")) {
                      onDelete(setup.id);
                    }
                  }}
                  className="text-red-500 px-2 py-1 rounded hover:bg-red-500"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
