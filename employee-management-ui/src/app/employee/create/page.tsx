"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { employeeSchema } from "../schema"
import { PageHeader } from "@/components/page-header"
import { PageHeaderDescription } from "@/components/page-header-description"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { createEmployeeAction } from "../actions/create-employee"
import { getRolesAction } from "../actions/get-roles"
import { Role } from "@/types/role"
import { useEffect, useState } from "react"
import { getDepartmentsAction } from "../actions/get-departments"
import { Department } from "@/types/department"



export default function CreateEmployee() {
    const router = useRouter();
    const [roles, setRoles] = useState<Role[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);

    useEffect(() => {
        async function fetchRoles() {
            try {
                const response = await getRolesAction();
                setRoles(response.data);
            } catch (error) {
                console.error("Error fetching roles:", error);
            }
        }

        async function fetchDepartments() {
            try {
                const response = await getDepartmentsAction();
                setDepartments(response.data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        }

        Promise.allSettled([fetchRoles(), fetchDepartments()])
    }, []);

    const form = useForm<z.infer<typeof employeeSchema>>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            name: "",
            email: "",
            roleId: 1,
            departmentId: 1,
        },
    })

    async function onSubmit(data: z.infer<typeof employeeSchema>) {
        const response = await createEmployeeAction(data);
        toast(response.message ?? response);
        router.push("/employee");
    }

    return (
        <>
            <PageHeader text="Create Employee" />
            <PageHeaderDescription text="Fill in the details below to create a new employee." />

            <div className="container py-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} autoComplete="name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john.doe@example.com" {...field} autoComplete="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="roleId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        onValueChange={value => field.onChange(Number(value))}
                                        defaultValue={String(field.value)}
                                    >
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {(roles as Role[]).map(role => (
                                                <SelectItem key={role.id} value={String(role.id)}>
                                                    {role.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="roleId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <Select
                                        onValueChange={value => field.onChange(Number(value))}
                                        defaultValue={String(field.value)}
                                    >
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a department" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {(departments as Department[]).map(department => (
                                                <SelectItem key={department.id} value={String(department.id)}>
                                                    {department.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <Button onClick={form.handleSubmit(onSubmit)} type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}
