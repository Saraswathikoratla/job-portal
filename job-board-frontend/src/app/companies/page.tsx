"use client";

import { useEffect, useState } from "react";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<string[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch(
        "https://job-portal-1-re7b.onrender.com/api/jobs/companies"
      );

      const data = await response.json();

      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Companies
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        {companies.map((company) => (
          <div
            key={company}
            className="rounded-xl border bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {company}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}