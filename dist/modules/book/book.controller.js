"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_model_1 = __importDefault(require("./book.model"));
// create book entry
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        // const sanitizedBody = bookCreationSchema.parseAsync(body);
        const newBook = new book_model_1.default(body);
        const savedBook = yield newBook.save();
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: savedBook,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error,
        });
    }
});
// get all books
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield book_model_1.default.find({});
        if (allBooks.length === 0) {
            res.status(404).json({
                success: false,
                message: "No books found",
                data: [],
            });
        }
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: allBooks,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to retrieve books",
            success: false,
            error,
        });
    }
});
// get book by id
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        const book = yield book_model_1.default.findById(bookId);
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to retrieve book",
            success: false,
            error,
        });
    }
});
// update book by id
const updateBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const body = req.body;
    try {
        const updatedBook = yield book_model_1.default.findOneAndUpdate({ _id: bookId }, {
            $set: body,
        }, {
            runValidators: true,
            new: true,
        });
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updatedBook,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update book",
            success: false,
            error,
        });
    }
});
// delete book by id
const deleteBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    try {
        yield book_model_1.default.findOneAndDelete({ _id: bookId });
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete book",
            success: false,
            error,
        });
    }
});
exports.BookController = {
    addBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById,
};
