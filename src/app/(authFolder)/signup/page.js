// src/app/signup/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Link } from "@nextui-org/react";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      router.push("/login");
    } else {
      setError(data.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-[url('/signup-bg.jpg')] bg-cover bg-center
      "
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-600 mb-6">
          Already have one?{" "}
          <Link href="/login" color="primary" underline="always">
            Log in
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label="Full Name"
            variant="faded"
            fullWidth
            size="lg"
            onChange={handleChange}
            required
          />
          <Input
            name="username"
            label="Username"
            variant="faded"
            fullWidth
            size="lg"
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            label="Email"
            type="email"
            variant="faded"
            fullWidth
            size="lg"
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            variant="faded"
            fullWidth
            size="lg"
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            label="Phone"
            variant="faded"
            fullWidth
            size="lg"
            onChange={handleChange}
          />

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <Button
            type="submit"
            color="primary"
            radius="full"
            className="w-full"
            isLoading={loading}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}


