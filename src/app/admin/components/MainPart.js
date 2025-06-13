"use client";

import MainView from "./MainView";
import Logo from "../../../components/Logo";

export default function MainPart({ user }) {
  return (
    <div className="min-h-screen w-full bg-[#f9fafb] text-black flex flex-col items-center">
      <div className="w-full flex justify-start px-10 py-6">
        <Logo />
      </div>

      <MainView user={user} />
    </div>
  );
}


