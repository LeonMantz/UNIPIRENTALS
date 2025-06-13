import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LogInAction from "../components/LogInAction";
import CallForAction from "../components/CallForAction";
import Footer from "../components/Footer";
import { cookies } from "next/headers";

export default async function Home() {
  const sessionCookie = await cookies().get("session")?.value;

  let loggedIn = false;
  let user = { _id: "", name: "", username: "" };

  if (sessionCookie) {
    try {
      user = JSON.parse(sessionCookie);
      loggedIn = true;
    } catch (error) {
      console.error("Failed to parse session cookie", error);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar user={user} loggedIn={loggedIn} />

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <Hero />
      </section>

      {!loggedIn && (
        <section className="px-4 py-8 max-w-4xl mx-auto">
          <LogInAction />
        </section>
      )}

      <section className="px-4 py-12 bg-white">
        <CallForAction />
      </section>

      <footer className="bg-gray-100 mt-12 py-10">
        <Footer />
      </footer>
    </main>
  );
}

