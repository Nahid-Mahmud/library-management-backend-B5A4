import { Response } from "express";

interface Meta {
  page?: number;
  limit?: number;
  total?: number;
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  meta?: Meta,
  data?: T
) => {
  res.status(statusCode).json({ success, message, data, meta });
};
