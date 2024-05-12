import { Request, Response } from "express";
import { Book } from "../../model/bookModel";
import { prisma } from "../../main";

const createBook = async (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    if (
      book.ID == undefined ||
      book.Author == undefined ||
      book.Title == undefined
    ) {
      res.status(400).send("Body not complete");
    } else {
      await prisma.book.create({
        data: {
          title: String(book.Title),
          author: String(book.Author),
        },
      });
      res.send("create suscesful").status(202);
    }
  } catch (error) {
    res.send(error).status(500);
  }
};

export default createBook;
