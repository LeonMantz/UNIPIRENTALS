"use client";

import MainPanel from "./MainPanel";

export default function DashboardMain({ user }) {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <MainPanel user={user} />
    </div>
  );
}

