import { Router } from "express";
import { SendEmailController } from "./controllers/SendEmailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendEmailController = new SendEmailController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.index);

router.post("/sendmail", sendEmailController.execute);

export { router };
