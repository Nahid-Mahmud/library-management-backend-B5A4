"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
router.post("/", book_controller_1.BookController.addBook);
exports.BookRoutes = router;
