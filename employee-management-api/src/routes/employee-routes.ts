import { Router } from "express";
import { createEmployee } from "../controllers/employee/create-employee";
import { getEmployees } from "../controllers/employee/get-employees";
import { updateEmployee } from "../controllers/employee/update-employee";
import { deleteEmployee } from "../controllers/employee/delete-employee";
import { employeeSchema } from "../models/employee";
import { validate } from "../middlewares/validate";
import { getSpecificEmployee } from "../controllers/employee/get-specific-employee";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getSpecificEmployee);
router.post("/", validate(employeeSchema), createEmployee);
router.put("/:id", validate(employeeSchema), updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
