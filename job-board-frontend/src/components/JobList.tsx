"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import JobCard from "./JobCard";
import { Job } from "@/types/Job";
import { searchJobs } from "@/services/jobService";

type JobListProps = {
  filters: {
    location: string;
    experience?: number;
    salary?: number;
  };
};

const JobList = ({ filters }: JobListProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const searchParams = useSearchParams();

const skill = searchParams?.get("skill") || "";
  useEffect(() => {
    const fetchJobs = async () => {
      const data = await searchJobs(
        filters.location,
        skill,
        filters.experience,
        filters.salary
      );

      setJobs(data);
    };

    fetchJobs();
  }, [filters, skill]);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">
        Available Jobs
      </h2>

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;