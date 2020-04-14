"use strict";

const Mailer = require("./services/mailer");
const mailer = new Mailer();

exports.handler = (event, context) => {
  for (const { body } of event.Records) {
    const messageBody = JSON.parse(body);
    const { subject, content } = messageBody;
    const emailTo = messageBody.to;
    return mailer.sendMail(context, { emailTo, subject, content });
  }
};
