import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7e2de03cf68049",
    pass: "d0b780af69844a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <contato@feedget.com>',
    to: 'Allyson Lopes <allysonlopes0@gmail.com>',
    subject,
    html: body,
  });
  }
}
