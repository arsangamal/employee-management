"use server";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function getEmployeesAction() {
  const res = await fetch(`${API_URL}/employees`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error("Error fetching employee:", error);
    throw new Error(error.message || "Failed to get employee");
  }

  return await res.json();
}
