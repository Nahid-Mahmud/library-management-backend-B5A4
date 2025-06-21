import express, { Application, NextFunction, Request, Response } from "express";
import { router } from "./routes";

export const app: Application = express();

app.use(express.json());

// root server route

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the Library management server! 😀",
    status: "running",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Route not found" });
});
