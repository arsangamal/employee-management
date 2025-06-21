import { Request, Response } from "express";
import { Employee } from "../../models/employee";
import { AppDataSource } from "../../data-source";

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, departmentId, roleId } = req.body;

    const employee = new Employee();
    employee.name = name;
    employee.email = email;
    employee.department = departmentId;
    employee.role = roleId;

    await AppDataSource.manager.save(employee);

    res
      .status(201)
      .json({ data: employee, message: "Employee created successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the employee",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
