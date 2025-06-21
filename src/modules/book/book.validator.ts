import { z } from "zod";

const bookCreationSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  author: z.string().min(1, "Author is required").trim(),
  genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"])
});
