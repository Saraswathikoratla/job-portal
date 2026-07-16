"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    setIsLoggedIn(!!token);
    setRole(storedRole);
  }, []);

  useEffect(() => {
    const handleAuthChange = () => {
      const token = localStorage.getItem("token");
      const storedRole = localStorage.getItem("role");

      setIsLoggedIn(!!token);
      setRole(storedRole);
    };

    window.addEventListener(
      "authChange",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "authChange",
        handleAuthChange
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setRole(null);

    router.push("/login");
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          JobBoard
        </h1>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/jobs">Jobs</Link>
          </li>

          <li>
            <Link href="/companies">Companies</Link>
          </li>
          {role === "CANDIDATE" && (
  <li>
    <Link href="/my-applications">
      My Applications
    </Link>
  </li>
)}

          {role === "EMPLOYER" && (
            <>
              <li>
                <a href="/jobs/create">
                  Create Job
                </a>
              </li>

            </>
          )}

          {!isLoggedIn ? (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>

              <li>
                <Link href="/register">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-500 px-4 py-2 text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;