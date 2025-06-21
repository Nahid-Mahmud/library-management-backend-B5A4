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
exports.BorrowBookController = void 0;
const borrowBook_model_1 = __importDefault(require("./borrowBook.model"));
const borrowBookCreation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const newBorrowedBook = new borrowBook_model_1.default(body);
        yield newBorrowedBook.borrowBook(body.quantity);
        const savedBorrowedBook = yield newBorrowedBook.save();
        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: savedBorrowedBook,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to borrow book",
            success: false,
            error: Object.keys(error).length !== 0 ? error : error.message,
        });
    }
});
const borrowBookSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // using aggregation
        const borrowedBooks = yield borrowBook_model_1.default.aggregate([
            // pipeline 1
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "book",
                },
            },
            {
                $project: {
                    _id: 0,
                    totalQuantity: 1,
                    book: {
                        title: 1,
                        isbn: 1,
                    },
                },
            },
        ]);
        res.status(200).json({
            success: true,
            data: borrowedBooks,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch borrowed books",
            success: false,
            error: Object.keys(error).length !== 0 ? error : error.message,
        });
    }
});
exports.BorrowBookController = {
    borrowBookCreation,
    borrowBookSummary,
};
