import { Request, Response, NextFunction } from "express";
import { Schema } from "zod";

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // or req.params, req.query
      next();
    } catch (error: any) {
      res.status(400).json({ errors: error.errors });
    }
  };
