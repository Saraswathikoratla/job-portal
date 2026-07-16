"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { createJob } from "@/services/jobService";
import { JobRequest } from "@/types/JobRequest";

export default function CreateJobPage() {
  const router = useRouter();

  const [job, setJob] = useState<JobRequest>({
    title: "",
    company: "",
    location: "",
    skills: "",
    experience: undefined,
    salary: undefined,
    jobType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setJob((prev) => ({
      ...prev,
      [name]:
        name === "experience" || name === "salary"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createJob(job);

      toast.success(
        "Job created successfully"
      );

      router.push("/jobs");
    } catch (error) {
      toast.error(
        "Failed to create job"
      );
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold">
          Create Job
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={job.company}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (Java, Spring Boot)"
            value={job.skills}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={job.experience}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <select
            name="jobType"
            value={job.jobType}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          >
            <option value="">
              Select Job Type
            </option>

            <option value="FULL_TIME">
              Full Time
            </option>

            <option value="PART_TIME">
              Part Time
            </option>

            <option value="REMOTE">
              Remote
            </option>

            <option value="INTERNSHIP">
              Internship
            </option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            rows={6}
            className="w-full rounded border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 text-white"
          >
            Create Job
          </button>
        </form>
      </div>
    </main>
  );
}