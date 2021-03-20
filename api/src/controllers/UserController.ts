import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";
import { AppError } from "../errors/AppError";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup
        .string()
        .ensure()
        .trim()
        .strict(true)
        .default("")
        .required("Required name!")
        .max(250, "Character limit above 250"),
      email: yup
        .string()
        .ensure()
        .trim()
        .strict(true)
        .email()
        .required("Required e-mail!")
        .typeError("Enter a valid e-mail"),
    });

    // if (!(await schema.isValid(request.body)))
    //   return response.status(400).json({ error: "Data schema failure!" });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

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
