import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  postgresHost: string;
  postgresPort: number;
  postgresUsername: string;
  postgresPassword: string;
  postgresDatabase: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  postgresHost: process.env.POSTGRES_HOST || "localhost",
  postgresPort: Number(process.env.POSTGRES_PORT) || 5432,
  postgresUsername: process.env.POSTGRES_USERNAME || "test",
  postgresPassword: process.env.POSTGRES_PASSWORD || "test",
  postgresDatabase: process.env.POSTGRES_DATABASE || "test",
};

export default config;
