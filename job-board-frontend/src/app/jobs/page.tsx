"use client";

import { useState } from "react";

import Filters from "@/components/Filters";
import JobList from "@/components/JobList";

export default function JobsPage() {
  const [filters, setFilters] = useState({
    location: "",
    experience: undefined as number | undefined,
    salary: undefined as number | undefined,
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

        <aside className="lg:col-span-1">
          <Filters
            onApplyFilters={(
              location,
              experience,
              salary
            ) =>
              setFilters({
                location,
                experience,
                salary,
              })
            }
          />
        </aside>

        <section className="lg:col-span-3">
          <JobList filters={filters} />
        </section>

      </div>
    </main>
  );
}