import { Job } from "@/types/Job";
import { JobRequest } from "@/types/JobRequest";

const API_URL = "http://localhost:8080/api/jobs";

export const getJobs = async (): Promise<Job[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};
export const searchJobs = async (
  location?: string,
  skill?: string,
  experience?: number,
  salary?: number
): Promise<Job[]> => {

  const params = new URLSearchParams();

  if (location) params.append("location", location);
  if (skill) params.append("skill", skill);
  if (experience) params.append("experience", experience.toString());
  if (salary) params.append("salary", salary.toString());

  const response = await fetch(
    `http://localhost:8080/api/jobs?${params.toString()}`
  );

  return response.json();
};
export const applyJob = async (
  userId: number,
  jobId: number
) => {

  const response = await fetch(
    "http://localhost:8080/api/applications",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        jobId,
      }),
    }
  );

  return response.text();
};
export const createJob = async (job: JobRequest) => {
  const response = await fetch(
    "http://localhost:8080/api/jobs",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    }
  );

  return response.json();
};

export const getJobById = async (id: number) => {
  const response = await fetch(
    `http://localhost:8080/api/jobs/${id}`
  );

  return response.json();
};

export const updateJob = async (
  id: number,
  job: JobRequest
) => {
  const response = await fetch(
    `http://localhost:8080/api/jobs/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    }
  );

  return response.json();
};

export const deleteJob = async (id: number) => {
  await fetch(
    `http://localhost:8080/api/jobs/${id}`,
    {
      method: "DELETE",
    }
  );
};