"use client";

import UserView from "./UserView";

export default function MainView({ user }) {
  return (
    <div className="w-full flex flex-col items-center">
      <UserView user={user} />
    </div>
  );
}

