import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { AppError } from "../errors/AppError";
import RequestValidatorAdapter from "../validators/request-validator-adapter";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    await RequestValidatorAdapter.isValidRequest(request);

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new AppError("User already exists!");

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };
