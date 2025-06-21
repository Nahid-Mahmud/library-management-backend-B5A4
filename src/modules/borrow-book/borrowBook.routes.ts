import { Router } from "express";
import { BorrowBookController } from "./borrowBook.controller";

const router = Router();

router.post("/", BorrowBookController.borrowBook);

export const BorrowBookRoutes = router;
