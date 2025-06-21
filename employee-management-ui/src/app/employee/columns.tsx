"use client";

import { DeleteDialog } from "@/components/delete-dialog";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Employee } from "@/types/employee";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { deleteEmployeeAction } from "./actions/delete-employee";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export const EmployeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role.name",
        header: "Role",
    },
    {
        accessorKey: "department.name",
        header: "Department",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const employee = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href={`/employee/${employee.id}`}>
                                Update {employee.name}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" onSelect={(e) => e.preventDefault()}>
                            <DeleteDialog action={(event) => {
                                event.preventDefault();
                                deleteEmployeeAction(employee.id).then((data) => {
                                    toast(data.message)
                                    redirect("/employee");
                                });
                            }} text={`Delete ${employee.name}`} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
