# Employee Management System

This repository contains a full-stack Employee Management System, split into two main projects:

- **employee-management-api**: A RESTful API built with Node.js and TypeScript for managing employees, departments, and roles.
- **employee-management-ui**: A modern web UI built with Next.js and TypeScript for interacting with the API.

## Assumptions

- The API and UI are designed to run together using Docker Compose.
- The API uses Postgres database.
- The UI communicates with the API via HTTP.
- Both projects are set up for development and task purposes, not production hardening.
- Both the roles and departments were inserted as raw sql once database has initialized (its not the best practice but for the task)

## Project Structure

```
/employee-management
├── docker-compose.yml
├── employee-management-api/
│   ├── Dockerfile
│   └── ...
└── employee-management-ui/
    ├── Dockerfile
    └── ...
```

## Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your system.

## How to Run (One Command)

From the root of the repository, run:

```sh
docker compose up --build
```

This command will:

- Build and start both the API and UI containers.
- The API will be available at `http://localhost:3001` (or as configured).
- The UI will be available at `http://localhost:3000`.
- The PgAdmin4 will be available at `http://localhost:8888`

## extra configurations

- PgAdmin4 credentails are `test@domain-name.com` and `123456`
- Database credentails are 
```bash
POSTGRES_DATABASE=employee_management
POSTGRES_USER=test
POSTGRES_PASSWORD=test
POSTGRES_HOST=employee_management_db
```

## Stopping the Services

To stop the containers, press `Ctrl+C` in the terminal, then run:

```sh
docker compose down
```

## Additional Notes

- Update environment variables and database configuration as needed in each project.
- For development, you can run each project separately using their respective `Dockerfile` or local development scripts.
- For production, further configuration and security hardening are recommended.

---
