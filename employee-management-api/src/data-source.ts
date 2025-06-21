import { DataSource } from "typeorm";
import config from "./config/config";
import { Employee } from "./models/employee";
import { Role } from "./models/role";
import { Department } from "./models/department";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.postgresHost,
  port: config.postgresPort,
  username: config.postgresUsername,
  password: config.postgresPassword,
  database: config.postgresDatabase,
  synchronize: true,
  logging: true,
  entities: [Employee, Role, Department],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(async (manager) => {
    console.log("Data Source has been initialized!");
    await manager.query(`
      -- Insert 'Frontend Developer' into role if it doesn't exist
INSERT INTO role (name)
SELECT 'Frontend Developer'
WHERE NOT EXISTS (
    SELECT 1 FROM role WHERE name = 'Frontend Developer'
);

-- Insert 'Backend Developer' into role if it doesn't exist
INSERT INTO role (name)
SELECT 'Backend Developer'
WHERE NOT EXISTS (
    SELECT 1 FROM role WHERE name = 'Backend Developer'
);

-- Insert 'Engineering' into department if it doesn't exist
INSERT INTO department (name)
SELECT 'Engineering'
WHERE NOT EXISTS (
    SELECT 1 FROM department WHERE name = 'Engineering'
);

-- Insert 'Marketing' into department if it doesn't exist
INSERT INTO department (name)
SELECT 'Marketing'
WHERE NOT EXISTS (
    SELECT 1 FROM department WHERE name = 'Marketing'
);
      `);
  })
  .catch((error) => console.log(error));
