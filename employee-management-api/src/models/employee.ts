import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./role";
import { Department } from "./department";
import { z } from "zod";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100, unique: true })
  email!: string;

  @ManyToOne(() => Role)
  @JoinColumn()
  role!: Role;

  @ManyToOne(() => Department)
  @JoinColumn()
  department!: Department;
}

export const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  roleId: z.coerce.number().int(),
  departmentId: z.coerce.number().int(),
});
