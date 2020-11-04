const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/send", (req, res) => {
  console.log("send hit");
  console.log(req.body);
  const EmailAddress = process.env.EMAIL_ADDRESS;
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: EmailAddress,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOption = {
    from: req.body.email,
    to: EmailAddress,
    subject: "Email from Sportscar app",
    text: `Name: ${req.body.name}, 
           Current-role: ${req.body.role}, 
           Love Sport cars?: ${req.body.enthusiast}, 
           Comment: ${req.body.comment}`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      res.sendStatus(503).console.log(err);
    } else {
      res.sendStatus(200).console.log("email sent");
    }
  });
});

module.exports = router;
