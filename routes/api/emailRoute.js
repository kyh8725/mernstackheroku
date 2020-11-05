const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/send", async (req, res) => {
  console.log(req.body);
  const EmailAddress = process.env.EMAIL_ADDRESS;

  let mailOption = {
    from: req.body.email,
    to: EmailAddress,
    subject: "Sportscar app",
    text: `Name: ${req.body.name}, 
           Current-role: ${req.body.role}, 
           Love Sport cars?: ${req.body.enthusiast}, 
           Comment: ${req.body.comment}`,
  };

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: EmailAddress,
      pass: process.env.EMAIL_PASS,
    },
  });
  await transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      res.sendStatus(503).console.log(err);
    } else {
      res.sendStatus(200).console.log("email sent");
    }
  });
});

module.exports = router;
