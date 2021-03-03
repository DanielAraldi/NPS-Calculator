import { Router } from "express";
import { SendEmailController } from "./controllers/SendEmailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";
import { AppError } from "./errors/AppError";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendEmailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.index);

router.post("/sendmail", sendEmailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute);

router.all("*", () => {
  throw new AppError("Not Found Page", 404);
});

export { router };
