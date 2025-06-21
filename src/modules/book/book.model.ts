import { Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});
