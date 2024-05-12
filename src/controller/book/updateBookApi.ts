import { Request, Response } from "express";
import { Book } from "../../model/bookModel";
import { prisma } from "../../main";

const updateBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const book: Book = req.body;
  try {
    await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: {
        title: String(book.Title),
        author: String(book.Author),
      },
    });
    res.send("update book sucessful").status(202);
  } catch (error) {
    res.send(error).status(500);
  }
};

export default updateBook;
