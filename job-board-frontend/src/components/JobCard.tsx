"use client";
import { applyJob } from "@/services/jobService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteJob } from "@/services/jobService";
import { useEffect, useState } from "react";


type JobCardProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  skills: string;
  experience: number;
  salary: number;
  jobType: string;
  description: string;
};

const JobCard = ({
  id,
  title,
  company,
  location,
  skills,
  experience,
  salary,
  jobType,
  description,
}: JobCardProps) => {
  const router = useRouter();
const [role, setRole] = useState("");

console.log("Current role:", role);
useEffect(() => {
  const storedRole = localStorage.getItem("role");

  console.log("Stored role:", storedRole);
  if (storedRole) {
    setRole(storedRole);
  }
}, []);

   const handleApply = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error(
        "Please sign in to apply for this job."
      );

      router.push("/login");
      return;
    }

    const userId =
      localStorage.getItem("userId");

    const response = await applyJob(
      Number(userId),
      id
    );

    toast.success(response);
  };

const handleDelete = async (
  id: number
) => {
  const confirmDelete = confirm(
    "Delete this job?"
  );

  if (!confirmDelete) {
    return;
  }

  await deleteJob(id);

  toast.success(
    "Job deleted successfully"
  );

  window.location.reload();
};
  return (
    <div className="mb-4 rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-1 text-gray-600">
        {company}
      </p>

     <div className="mt-4 space-y-2 text-sm text-gray-600">
  <p>
    <span className="font-semibold">📍 Location:</span>{" "}
    {location}
  </p>

  <p>
    <span className="font-semibold">🛠 Skills:</span>{" "}
    {skills}
  </p>

  <p>
    <span className="font-semibold">💼 Experience:</span>{" "}
    {experience} years
  </p>

  <p>
    <span className="font-semibold">💰 Salary:</span>{" "}
    ₹{salary.toLocaleString()}
  </p>

  <p>
    <span className="font-semibold">🕒 Job Type:</span>{" "}
    {jobType}
  </p>

  <p>
    <span className="font-semibold">📝 Description:</span>{" "}
    {description}
  </p>
</div>

       

{
  role === "EMPLOYER" ? (
    <div className="mt-5 flex gap-3">
      <button
        onClick={() =>
          router.push(`/jobs/edit/${id}`)
        }
        className="rounded-md bg-yellow-500 px-4 py-2 text-white"
      >
        Update
      </button>

      <button
        onClick={() =>
          handleDelete(id)
        }
        className="rounded-md bg-red-600 px-4 py-2 text-white"
      >
        Delete
      </button>
    </div>
  ) : (
    <button
      onClick={handleApply}
      className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-white"
    >
      Apply
    </button>
  )
}
    </div>
  );
};

export default JobCard;