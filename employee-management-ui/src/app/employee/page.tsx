"use client";

import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { PageHeaderDescription } from "@/components/page-header-description";
import { EmployeeColumns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { getEmployeesAction } from "./actions/get-employees";
import { useEffect, useState } from "react";
import { Employee } from "@/types/employee";


export default function ListEmployees() {
  const router = useRouter();
  const [employees, setEmployees] = useState<Employee[]>([]);



  const goToCreateEmployee = () => {
    router.push("/employee/create");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployeesAction();
      setEmployees(data.data || []);
    };

    fetchData();
  }, []);

  return (
    <>

      <PageHeader text="List of Employees" />
      <PageHeaderDescription text="Here you can find a list of all employees in the organization." />

      <div className="container mx-auto py-10">
        <div className="flex justify-end">
          <Button onClick={goToCreateEmployee} variant="default" className="mb-4 cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            New Employee
          </Button>
        </div>
        <div className="py-4">
          <DataTable columns={EmployeeColumns} data={employees} />
        </div>
      </div>

    </>
  );
}
