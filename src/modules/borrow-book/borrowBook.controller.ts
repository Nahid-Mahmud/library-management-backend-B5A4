import { Request, Response } from "express";
import BorrowBook from "./borrowBook.model";

const borrowBook = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newBorrowedBook = new BorrowBook(body);
    await newBorrowedBook.borrowBook(body.quantity);
    const savedBorrowedBook = await newBorrowedBook.save();
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: savedBorrowedBook,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to borrow book",
      success: false,
      error: Object.keys(error).length !== 0 ? error : error.message,
    });
  }
};

export const BorrowBookController = {
  borrowBook,
};
