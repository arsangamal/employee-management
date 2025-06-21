import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Role } from "../../models/role";

export const getRoles = async (req: Request, res: Response) => {
  try {
    const rolesRepository = AppDataSource.getRepository(Role);
    const roles = await rolesRepository.find();

    if (!roles) {
      res.status(404).json({
        message: "No roles found",
      });

      return;
    }

    res.status(200).json({ data: roles });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving the roles",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
