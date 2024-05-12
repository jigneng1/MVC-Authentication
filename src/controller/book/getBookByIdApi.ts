import { Request, Response } from "express";
import { prisma } from "../../main";

const getBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (result == null) {
      res.send("cannot found this book").status(202);
    } else {
      res.send(result);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getBookById;
