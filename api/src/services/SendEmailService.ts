import {
  Transporter,
  createTestAccount,
  createTransport,
  getTestMessageUrl,
} from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

class SendEmailService {
  private client: Transporter;

  constructor() {
    createTestAccount().then((account) => {
      const transporter = createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: true,
        service: "gmail" || "hotmail",
        auth: {
          user: process.env["MAIL_LOGIN"],
          pass: process.env["MAIL_PASSWORD"],
        },
      });

      this.client = transporter;
    });
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString("utf8");

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: `NPS <${process.env["MAIL_LOGIN"]}>`,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(message));
  }
}

export default new SendEmailService();
