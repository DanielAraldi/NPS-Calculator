import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendEmailService from "../services/SendEmailService";

class SendEmailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (!userAlreadyExists)
      return response.status(400).json({ error: "User does not exists!" });

    const survey = await surveysRepository.findOne({
      id: survey_id, // that's equals the id === survey_id
    });

    if (!survey)
      return response.status(400).json({ error: "Survey does not exists!" });

    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id,
    });
    await surveysUsersRepository.save(surveyUser);

    await SendEmailService.execute(email, survey.title, survey.description)

    return response.status(200).json(surveyUser);
  }
}

export { SendEmailController };
