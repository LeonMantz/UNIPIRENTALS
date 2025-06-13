// src/app/login/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./components/EyeSlashFilledIcon";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/");
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-[url('/login-bg.jpg')] bg-cover bg-center
      "
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back!</h1>
        <p className="text-center text-gray-600 mb-6">
          Don’t have an account?{" "}
          <Link href="/signup" color="primary" underline="always">
            Register
          </Link>
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Username or Email"
            variant="faded"
            fullWidth
            size="lg"
            isInvalid={error}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
          />

          <Input
            label="Password"
            variant="faded"
            fullWidth
            size="lg"
            type={visible ? "text" : "password"}
            isInvalid={error}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            endContent={
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="focus:outline-none"
              >
                {visible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
              </button>
            }
          />

          {error && (
            <p className="text-sm text-red-600">Invalid credentials</p>
          )}

          <Button
            type="submit"
            color="primary"
            radius="full"
            className="w-full"
            isLoading={loading}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}





