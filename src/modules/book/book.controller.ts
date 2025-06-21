import { Request, Response } from "express";
import Book from "./book.model";

const addBook = async (req: Request, res: Response) => {
  const body = req.body;
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await Book.find({});
  } catch (error) {}
};
