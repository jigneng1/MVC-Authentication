import getBooks from "../controller/book/getBookApi";
import express from "express";
import getBookById from "../controller/book/getBookByIdApi";
import createBook from "../controller/book/createBookApi";
import updateBook from "../controller/book/updateBookApi";
import deleteBook from "../controller/book/deleteBookApi";
const bookRoutes = express.Router();
bookRoutes.use(express.json());

bookRoutes.get("/books", getBooks);

bookRoutes.get("/books/:id", getBookById);

bookRoutes.post("/books", createBook);

bookRoutes.put("/books/:id", updateBook);

bookRoutes.delete("/books/:id", deleteBook);

export default bookRoutes;
