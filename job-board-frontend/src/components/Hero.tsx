"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const [skill, setSkill] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/jobs?skill=${skill}`);
  };

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Find Your Dream Job
        </h1>

        <div className="flex overflow-hidden rounded-lg bg-white shadow">
          <input
            type="text"
            placeholder="Search skills (Java, React...)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="w-full px-4 py-4 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 px-6 text-white"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;