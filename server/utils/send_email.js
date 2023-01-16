const nodemailer = require("nodemailer");

const send_email = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.GRID_USERNAME,
      pass: process.env.GRID_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = send_email;
