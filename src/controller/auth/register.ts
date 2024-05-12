import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../main";
const register = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const salt = 10;
    const password = bcrypt.hashSync(req.body.password, salt);
    const exitUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (exitUser != null) {
      return res.status(400).json({
        sucess: false,
        payload: "user has exited",
      });
    }

    await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return res.status(200).json({
      success: true,
      payload: "register sucessful",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      payload: error,
    });
  }
};

export default register;
