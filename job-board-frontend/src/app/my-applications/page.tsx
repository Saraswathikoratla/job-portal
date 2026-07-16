"use client";

import { useEffect, useState } from "react";

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const userId = localStorage.getItem("userId");

      const response = await fetch(
        `http://localhost:8080/api/applications/user/${userId}`
      );

      const data = await response.json();

      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        My Applications
      </h1>

      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold">
              {application.job.title}
            </h2>

            <p className="mt-1 text-gray-600">
              {application.job.company}
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <p>📍 {application.job.location}</p>
              <p>💰 ₹{application.job.salary}</p>
              <p>💼 {application.job.experience} years</p>
              <p>📅 Applied on: {application.appliedAt}</p>
            </div>

            <span className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              {application.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}