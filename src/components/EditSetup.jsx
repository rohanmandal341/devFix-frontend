// src/components/EditSetup.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllSetup, update } from "../services/SetupServices";

export default function EditSetup() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [setup, setSetup] = useState({
    title: "",
    description: "",
    solution: "",
    video: "",
  });

  useEffect(() => {
    const load = async () => {
      const data = await getAllSetup(); // or create a `getById()` API
      const found = data.find((item) => item.id === Number(id));
      if (found) setSetup(found);
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    setSetup({ ...setup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(id, setup);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">✏️ Edit Setup</h1>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        {["title", "description", "solution", "video"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={setup[field]}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
            required
          />
        ))}
        <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
          Update
        </button>
      </form>
    </div>
  );
}
