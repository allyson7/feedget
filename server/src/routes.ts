import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7e2de03cf68049",
    pass: "d0b780af69844a"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <contato@feedget.com>',
    to: 'Allyson Lopes <allysonlopes0@gmail.com>',
    subject: 'Novo feedback de feedget',
    html: [
      `<div styles="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo de feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  });

  return res.status(201).json({ data: feedback });
});
