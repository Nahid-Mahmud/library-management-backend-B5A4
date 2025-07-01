import { Request, Response } from "express";
import { sendResponse } from "../../helper/sendResponse";
import Book from "./book.model";

// create book entry

const addBook = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newBook = new Book(body);
    const savedBook = await newBook.save();
    sendResponse(res, 201, true, "Book created successfully", savedBook);
  } catch (error: any) {
    sendResponse(res, 400, false, error.message, error);
  }
};

// get all books

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length === 0) {
      sendResponse(res, 404, false, "No books found", []);
    }
    sendResponse(res, 200, true, "Books retrieved successfully", allBooks);
  } catch (error: any) {
    sendResponse(res, 500, false, "Failed to retrieve books", error);
  }
};

// get book by id

const getBookById = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    const book = await Book.findById(bookId);
    sendResponse(res, 200, true, "Book retrieved successfully", book);
  } catch (error: any) {
    sendResponse(res, 500, false, "Failed to retrieve book", error);
  }
};

// update book by id
const updateBookById = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const body = req.body;
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: bookId },
      {
        $set: body,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    sendResponse(res, 200, true, "Book updated successfully", updatedBook);
  } catch (error: any) {
    sendResponse(res, 500, false, "Failed to update book", error);
  }
};

// delete book by id

const deleteBookById = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  try {
    await Book.findOneAndDelete({ _id: bookId });
    sendResponse(res, 200, true, "Book deleted successfully");
  } catch (error: any) {
    sendResponse(res, 500, false, "Failed to delete book", error);
  }
};

export const BookController = {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
