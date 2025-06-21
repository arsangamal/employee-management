import { Router } from "express";
import { getRoles } from "../controllers/role/get-role";

const router = Router();

router.get("/", getRoles);

export default router;
