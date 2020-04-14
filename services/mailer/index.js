"use strict";

const nodeMailer = require("nodemailer");

class Mailer {
  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
      }
    });
  }

  sendMail(context, messageBody) {
    const { emailTo, subject, content } = messageBody;
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: emailTo,
      subject,
      html: content
    };
    this.transporter.sendMail(mailOptions, error => {
      if (error) return context.fail(error, "Failed");
      context.done(null, "Completed");
    });
  }
}

module.exports = Mailer;
