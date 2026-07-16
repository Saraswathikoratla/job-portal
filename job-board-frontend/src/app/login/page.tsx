"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const data = await login(
        email,
        password
      );

 localStorage.setItem(
  "token",
  data.token
);

localStorage.setItem(
  "userId",
  data.userId
);

localStorage.setItem(
  "role",
  data.role
);

window.dispatchEvent(
  new Event("authChange")
);

toast.success("Login successful");

if (data.role === "EMPLOYER") {
  router.push("/jobs/create");
} else {
  router.push("/jobs");
}
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded border p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded border p-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="w-full rounded bg-blue-600 py-3 text-white">
          Login
        </button>
      </form>
    </div>
  );
}