import "reflect-metadata";
import express from "express";
import { errorHandler } from "./middlewares/error-handler";
import employeeRoutes from "./routes/employee-routes";
import roleRoutes from "./routes/role-routes";
import departmentRoutes from "./routes/department-routes";
import "./data-source"; // Ensure the data source is initialized

const app = express();

app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/departments", departmentRoutes);
app.use("/roles", roleRoutes);

app.use(errorHandler);

export default app;
