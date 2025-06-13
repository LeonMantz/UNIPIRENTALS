"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@mui/icons-material";

export default function SearchFull({ type }) {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    const str_type = type === 1 ? "Buy" : "Rent";

    // Example hardcoded lat/lng - can be replaced with real logic later
    router.push(
      `/listings?lat=34&lng=34&name=${inputText}&type=${str_type}`
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder={`Search ${type === 1 ? "homes to buy" : "rentals"}...`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base hover:bg-blue-700 transition flex items-center gap-2"
      >
        <Search /> Search
      </button>
    </div>
  );
}
