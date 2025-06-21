"use server";

import { z } from "zod";
import { employeeSchema } from "../schema";
import { Employee } from "@/types/employee";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function updateEmployeeAction(
  id: string,
  input: z.infer<typeof employeeSchema>
): Promise<{ data: Employee; message: string }> {
  const res = await fetch(`${API_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    return error.message || "Failed to update employee";
  }

  return await res.json();
}
