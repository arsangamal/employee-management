import { Request, Response } from "express";
import { Employee } from "../../models/employee";
import { AppDataSource } from "../../data-source";

export const deleteEmployee = async (req: Request, res: Response) => {
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

    await AppDataSource.manager.remove(employee);

    res.status(200).json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the employee",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
