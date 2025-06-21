"use server";

// Adjust the API URL as needed for your environment
const API_URL = process.env.API_URL;

export async function deleteEmployeeAction(id: string) {
  const res = await fetch(`${API_URL}/employees/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    return error.message || "Failed to delete employee";
  }

  return await res.json();
}
