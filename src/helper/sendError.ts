// utils/sendError.ts
import { Response } from "express";

interface IErrorOptions {
  res: Response;
  statusCode?: number;
  message?: string;
  error?: any;
}

const sendError = ({ res, statusCode = 500, message = "Something went wrong", error }: IErrorOptions) => {
  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

export default sendError;
