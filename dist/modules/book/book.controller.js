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
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield book_model_1.default.find({});
    }
    catch (error) { }
});
exports.BookController = {
    addBook,
    getAllBooks,
};
