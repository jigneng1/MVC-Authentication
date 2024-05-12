import { Request, Response } from "express";
import { prisma } from "../../main";
import bcrypt from "bcrypt";
import { generateToken } from "./jwt";

const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const findUser = await prisma.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });

    // compare password
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (comparePassword == false) {
      return res.status(400).json({
        success: false,
        payload: "password not correct",
      });
    }
    const token = generateToken();
    res.cookie("token", token);
    return res.status(200).json({
      success: true,
      payload: {
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      payload: error,
    });
  }
};

export default login
