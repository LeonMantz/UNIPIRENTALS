"use server";

import { cookies } from "next/headers";
import Link from "next/link";
import Logo from "./Logo"; // ✅ Make sure the path is correct

export default async function NavBarSticky() {
  const sessionCookie = await cookies().get("session")?.value;

  let loggedIn = false;
  let user = { _id: "", name: "", username: "" };

  if (sessionCookie !== undefined) {
    user = JSON.parse(sessionCookie);
    loggedIn = true;
  }

  return (
    <header className="w-full bg-blue-50 text-blue-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>

        <div className="flex items-center gap-8 text-sm font-semibold">
          {/* ✅ Functional About + Contact */}
          <Link href="/about">
            <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              About us
            </div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Contact us
            </div>
          </Link>

          {/* ✅ Login or Username */}
          {!loggedIn ? (
            <Link href="/login">
              <div className="px-4 py-2 rounded-md bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                Sign in
              </div>
            </Link>
          ) : (
            <Link href="/dashboard">
              <div className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer">
                {user.username}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}





