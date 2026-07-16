"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/services/authService";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CANDIDATE");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
    const data = await register(
  name,
  email,
  password,
  role
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

toast.success("Registration successful");

if (data.role === "EMPLOYER") {
  router.push("/jobs/create");
} else {
  router.push("/jobs");
}
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="mb-4 w-full rounded border p-3"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded border p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
<select
  className="mb-4 w-full rounded border p-3"
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
  <option value="CANDIDATE">
    Candidate
  </option>

  <option value="EMPLOYER">
    Employer
  </option>
</select>
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
          Register
        </button>
      </form>
    </div>
  );
}