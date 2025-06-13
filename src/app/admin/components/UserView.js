"use client";

import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";

export default function UserView() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Φόρτωσε όλους τους χρήστες
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/allUsers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, []);

  // Διαγραφή χρήστη
  const deleteUser = async () => {
    if (!selectedUserId) return;

    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/auth/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedUserId }),
      });

      const result = await res.json();

      if (result.success) {
        window.location.reload();
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      alert("An error occurred while deleting.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Manage Users</h1>

      {/* Πλαίσιο χρηστών */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            onClick={() => setSelectedUserId(user._id)}
            className={`w-full p-4 rounded-lg border text-left shadow-sm cursor-pointer transition ${
              selectedUserId === user._id
                ? "bg-blue-100 border-blue-500"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <p className="font-semibold text-gray-800">{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}

        {/* Κουμπί Delete */}
        <button
          onClick={deleteUser}
          disabled={!selectedUserId}
          className={`mt-4 px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-2 transition ${
            selectedUserId
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          <Delete />
          Delete Account
        </button>
      </div>
    </div>
  );
}

