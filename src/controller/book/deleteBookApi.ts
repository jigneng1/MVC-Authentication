import { Request, Response } from "express";
import { prisma } from "../../main";

const deleteBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });
    res.send("Delete Sucessful").status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

export default deleteBook;
