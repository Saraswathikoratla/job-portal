"use client";

import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/types/Job";
import { getJobs } from "@/services/jobService";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();

      setJobs(data.slice(0, 3));
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Featured Jobs
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;