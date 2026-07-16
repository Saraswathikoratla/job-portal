"use client";

import { useState } from "react";

type FiltersProps = {
  onApplyFilters: (
    location: string,
    experience?: number,
    salary?: number
  ) => void;
};

const Filters = ({ onApplyFilters }: FiltersProps) => {
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState<number>();
  const [salary, setSalary] = useState<number>();

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Filters</h2>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            type="text"
            placeholder="Hyderabad"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Experience
          </label>

          <select
            className="w-full rounded-md border p-2"
            onChange={(e) =>
              setExperience(Number(e.target.value))
            }
          >
            <option value="">Select</option>
            <option value="1">1 Year</option>
            <option value="3">3 Years</option>
            <option value="5">5 Years</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Salary
          </label>

          <select
            className="w-full rounded-md border p-2"
            onChange={(e) =>
              setSalary(Number(e.target.value))
            }
          >
            <option value="">Select</option>
            <option value="300000">₹3 LPA+</option>
            <option value="500000">₹5 LPA+</option>
            <option value="1000000">₹10 LPA+</option>
          </select>
        </div>

        <button
          onClick={() =>
            onApplyFilters(
              location,
              experience,
              salary
            )
          }
          className="w-full rounded-md bg-blue-600 py-2 text-white"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;