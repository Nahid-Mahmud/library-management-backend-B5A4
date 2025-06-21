import express, { Application } from "express";
import { router } from "./routes";

export const app: Application = express();

app.use(express.json());

// root server route

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Library management server! 😀",
    status: "running",
  });
});
