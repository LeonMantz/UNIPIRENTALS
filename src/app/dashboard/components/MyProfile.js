"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AlertDialog from "./AlertDialog";

export default function MyProfile({ user }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  async function handleLogOut() {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (data.success) {
      router.push("/");
    }
  }

  async function handleDelete() {
    const response = await fetch("/api/auth/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username }),
    });

    const data = await response.json();
    if (data.success) {
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">My Profile</h1>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-8">
          <div>
            <p className="font-semibold">Name</p>
            <p>{user.name}</p>
          </div>
          <div>
            <p className="font-semibold">Username</p>
            <p>{user.username}</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>{user.phone}</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <Button color="danger" className="w-full" onPress={handleLogOut}>
            Log Out
          </Button>
          <Button color="danger" className="w-full" onPress={handleOpenDialog}>
            Delete Account
          </Button>
        </div>

        <AlertDialog
          open={open}
          onClose={handleCloseDialog}
          onAgree={handleDelete}
        />
      </div>
    </div>
  );
}


