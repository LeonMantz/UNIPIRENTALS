// src/app/contact/page.js
"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-blue-50 text-blue-900 px-6 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-gray-700">
          Have a question or need assistance? Fill out the form below and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    </main>
  );
}

