import { Request, Response } from "express";
import { Employee } from "../../models/employee";
import { AppDataSource } from "../../data-source";

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const employee = await AppDataSource.manager.findOne(Employee, {
      where: { id: Number(id) },
    });

    if (!employee) {
      res.status(404).json({
        message: "Employee not found",
      });

      return;
    }

    const { name, email, departmentId, roleId } = req.body;

    employee.name = name;
    employee.email = email;
    employee.department = departmentId;
    employee.role = roleId;

    await AppDataSource.manager.save(employee);

    res
      .status(200)
      .json({ data: employee, message: "Employee updated successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the employee",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
