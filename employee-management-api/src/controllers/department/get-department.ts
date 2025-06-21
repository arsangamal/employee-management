import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Department } from "../../models/department";

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departmentsRepository = await AppDataSource.getRepository(Department);
    const departments = await departmentsRepository.find();

    if (!departments) {
      res.status(404).json({
        message: "Departments not found",
      });

      return;
    }

    res.status(200).json({ data: departments });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving the departments",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
