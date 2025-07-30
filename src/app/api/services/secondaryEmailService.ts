import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const secondarySendEmail = async (
  text: string, 
  subject: string, 
  replyTo = process.env.EMAIL2,
  to = process.env.EMAIL2
) => {
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL2,
    pass: process.env.PASSWORD2,
  },
});

const mailOptions: Mail.Options = {
  from: process.env.EMAIL2,
  to,
  replyTo,
  subject, 
  text,
};

const sendMailPromise = () =>
  new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, function (err) {
      if (!err) {
        resolve('Email sent');
      } else {
        reject(err);
      }
    });
  });

try {
  if (!process.env.EMAIL2) return NextResponse.json({ error: 'Missing Env Vars' }, { status: 500 });

  return await sendMailPromise()
    .then(() => NextResponse.json({ message: 'Email Sent' }, { status: 200 }))
    .catch(error => {
      return NextResponse.json({ error }, { status: 500 })
    });
} catch (err) {
  return NextResponse.json({ error: err }, { status: 500 });
}
}

export { secondarySendEmail }