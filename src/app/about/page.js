// src/app/about/page.js
"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-gray-50 text-gray-900 px-6 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6 text-gray-700">
          Welcome to UnipiRentals! We’re a team of property experts dedicated to helping
          you find the perfect home, whether you want to buy or rent. Our mission is to
          make your search as seamless as possible.
        </p>

        {/* You can expand this section with images, team bios, etc. */}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
