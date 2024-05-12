import express, { Request, Response } from "express";
import IUser from "../model/userModel";
import jwt from "jsonwebtoken";
import { prisma } from "../main";
import register from "../controller/auth/register";
import login from "../controller/auth/login";

const authRouter = express.Router();

authRouter.use(express.json());

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
