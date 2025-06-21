"use server";

import { Department } from "@/types/department";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function getDepartmentsAction(): Promise<{ data: Department[] }> {
  const res = await fetch(`${API_URL}/departments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error("Error fetching departments:", error);
    throw new Error(error.message || "Failed to get departments");
  }

  return await res.json();
}
