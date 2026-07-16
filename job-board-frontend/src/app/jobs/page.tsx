"use client";

import { Suspense, useState } from "react";

import Filters from "@/components/Filters";
import JobList from "@/components/JobList";
import { FiltersType } from "@/types/Filters";

export default function JobsPage() {
 const [filters, setFilters] = useState<FiltersType>({
  location: "",
  experience: undefined,
  salary: undefined,
});

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <Filters setFilters={setFilters} />
        </aside>

        <section className="lg:col-span-3">
          <Suspense fallback={<p>Loading jobs...</p>}>
            <JobList filters={filters} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}