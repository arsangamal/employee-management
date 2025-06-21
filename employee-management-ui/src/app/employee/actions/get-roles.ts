"use server";

import { Role } from "@/types/role";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function getRolesAction(): Promise<{ data: Role[] }> {
  const res = await fetch(`${API_URL}/roles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error("Error fetching roles:", error);
    throw new Error(error.message || "Failed to get roles");
  }

  return await res.json();
}
