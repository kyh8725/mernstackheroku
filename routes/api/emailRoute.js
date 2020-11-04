const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/send", (req, res) => {
  const EmailAddress = process.env.EMAIL_ADDRESS;
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: EmailAddress,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(
    {
      from: JSON.parse(req.body.email),
      to: EmailAddress,
      subject: "Email from Sportscar app",
      text: `name: ${JSON.parse(JSON.stringify(req.body.name))} 
      current-role:${JSON.stringify(JSON.parse(req.body.role))} 
      sports-car" ${JSON.stringify(req.body.enthusiast)} 
      comment:${req.body.comment}`,
    },
    (err, data) => {
      if (err) {
        res.sendStatus(503).json(err);
      } else {
        res.sendStatus(200).json("email sent");
      }
    }
  );
});

module.exports = router;
