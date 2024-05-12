import { Request, Response } from "express";
import { prisma } from "../../main";

const getBooks = async (req: Request, res: Response) => {
  try {
    const result = await prisma.book.findMany();
    res.status(202).send(result);
  } catch (error) {
    res.send(error).status(500);
  }
};

export default getBooks;
