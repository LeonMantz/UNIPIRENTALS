"use client";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [type, setType] = useState(1); // 1 = Buy, 0 = Rent
  const router = useRouter();

  const handleSearch = () => {
    const str_type = type === 1 ? "Buy" : "Rent";
    router.push(`/listings?type=${str_type}`);
  };

  return (
    <section className="w-full pt-32 pb-16 px-4 bg-transparent text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Buy / Rent Toggle */}
        <div className="flex justify-center gap-4 text-lg">
          <button
            className={`px-4 py-2 rounded-xl border transition ${
              type === 1
                ? "bg-blue-600 text-white border-blue-600 cursor-default"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setType(1)}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded-xl border transition ${
              type === 0
                ? "bg-blue-600 text-white border-blue-600 cursor-default"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setType(0)}
          >
            Rent
          </button>
        </div>

        {/* Search Button Only */}
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
        >
          <Search /> Search
        </button>
      </div>
    </section>
  );
}





