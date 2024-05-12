import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import bookRoutes from "./router/bookRouter";
import { PrismaClient } from "@prisma/client";
import authRouter from "./router/authRouter";
import { checkAuth } from "./controller/auth/jwt";

//For env File
dotenv.config();

const app: Application = express();

const port = process.env.PORT || 8080;

//prisma config
export const prisma = new PrismaClient({
  errorFormat: "pretty",
});

// Main Page (Home)
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to BookAPI server");
});

app.use(express.json());

app.use("/user", authRouter);

app.use(checkAuth);

app.use("/book", bookRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
