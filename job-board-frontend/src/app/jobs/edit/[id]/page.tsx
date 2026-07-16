"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  getJobById,
  updateJob,
} from "@/services/jobService";

import toast from "react-hot-toast";

export default function EditJobPage() {

  const router = useRouter();


const params = useParams();

const id = Array.isArray(params?.id)
  ? Number(params.id[0])
  : Number(params?.id);

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    skills: "",
    experience: 0,
    salary: 0,
    jobType: "",
    description: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);

      setJob(data);
    };

    fetchJob();
  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    await updateJob(id, job);

    toast.success("Job updated successfully");

    router.push("/jobs");
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="w-full rounded border p-3"
          value={job.title}
          onChange={(e) =>
            setJob({
              ...job,
              title: e.target.value,
            })
          }
          placeholder="Title"
        />

        <input
          className="w-full rounded border p-3"
          value={job.company}
          onChange={(e) =>
            setJob({
              ...job,
              company: e.target.value,
            })
          }
          placeholder="Company"
        />
        <input
  className="w-full rounded border p-3"
  value={job.location}
  onChange={(e) =>
    setJob({
      ...job,
      location: e.target.value,
    })
  }
  placeholder="Location"
/>

<input
  className="w-full rounded border p-3"
  value={job.skills}
  onChange={(e) =>
    setJob({
      ...job,
      skills: e.target.value,
    })
  }
  placeholder="Skills"
/>

<input
  type="number"
  className="w-full rounded border p-3"
  value={job.experience}
  onChange={(e) =>
    setJob({
      ...job,
      experience: Number(e.target.value),
    })
  }
  placeholder="Experience"
/>

<input
  type="number"
  className="w-full rounded border p-3"
  value={job.salary}
  onChange={(e) =>
    setJob({
      ...job,
      salary: Number(e.target.value),
    })
  }
  placeholder="Salary"
/>

<select
  className="w-full rounded border p-3"
  value={job.jobType}
  onChange={(e) =>
    setJob({
      ...job,
      jobType: e.target.value,
    })
  }
>
  <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Remote">Remote</option>
  <option value="Hybrid">Hybrid</option>
</select>

<textarea
  className="w-full rounded border p-3"
  rows={5}
  value={job.description}
  onChange={(e) =>
    setJob({
      ...job,
      description: e.target.value,
    })
  }
  placeholder="Description"
/>

        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Update Job
        </button>
      </form>
    </main>
  );
}