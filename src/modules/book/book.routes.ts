import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.post("/", BookController.addBook);

export const BookRoutes = router;
