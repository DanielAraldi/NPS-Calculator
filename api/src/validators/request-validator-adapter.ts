import { Request } from "express";
import * as yup from "yup";
import { AppError } from "../errors/AppError";

class RequestValidatorAdapter {
  async isValidRequest(request: Request) {
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
  }
}

export default new RequestValidatorAdapter();
