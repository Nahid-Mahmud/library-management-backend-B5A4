import express, { Application } from "express";

export const app: Application = express();

app.use(express.json());

// root server route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Library management server! 😀",
    status: "running",
  });
});
