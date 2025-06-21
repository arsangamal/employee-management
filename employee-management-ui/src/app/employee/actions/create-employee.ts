"use server";

import { z } from "zod";
import { employeeSchema } from "../schema";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function createEmployeeAction(
  input: z.infer<typeof employeeSchema>
) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    return error.message || "Failed to create employee";
  }

  return await res.json();
}
