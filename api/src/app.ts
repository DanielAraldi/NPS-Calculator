import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import express, {
  NextFunction,
  Response,
  Request,
  Express,
  json,
} from "express";
import "express-async-errors";
import createConnection from "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

createConnection();
const app: Express = express();
app.use(json() as Express);
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError)
      return response.status(err.statusCode).json({ message: err.message });

    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error ${err.message}`,
    });
  }
);

export { app };
