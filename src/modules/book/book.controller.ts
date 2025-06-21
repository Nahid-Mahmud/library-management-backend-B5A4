import { Request, Response } from "express";
import Book from "./book.model";
import bookCreationSchema from "./book.validator";

const addBook = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    // const sanitizedBody = bookCreationSchema.parseAsync(body);

    const newBook = new Book(body);

    const savedBook = await newBook.save();
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: savedBook,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await Book.find({});
  } catch (error) {}
};

export const BookController = {
  addBook,
  getAllBooks,
};
