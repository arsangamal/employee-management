import { Request, Response, NextFunction } from "express";
import { Employee } from "../../models/employee";
import { AppDataSource } from "../../data-source";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employeesRepository = AppDataSource.getRepository(Employee);

    const employees = await employeesRepository.find({
      relations: {
        department: true,
        role: true,
      },
    });

    res.status(200).json({ data: employees });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching employees",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
