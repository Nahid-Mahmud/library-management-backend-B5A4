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
  data: T,
  meta?: Meta
) => {
  res.status(statusCode).json({ success, message, data, meta });
};
