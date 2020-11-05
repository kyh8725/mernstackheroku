require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// instantiate Passport and Github + Google Strategy
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passportConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
};

const passportGoogleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};

// passport config
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());

// passport.session middleware
app.use(passport.session());

passport.use(
  new GitHubStrategy(passportConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {
    return cb(null, profile);
  })
);

passport.use(
  new GoogleStrategy(passportGoogleConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {
    return cb(null, profile);
  })
);

// serializeUser and deserializeUser
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//email route
const emailRoute = require("./routes/api/emailRoute");
app.use("/email", emailRoute);

//passport route
const routes = require("./routes/api/passportRoute");
app.use("/passport", routes);

// vehicle route
const vehicleRoute = require("./routes/api/vehicleRoute");
app.use("/vehicles", vehicleRoute);

//dealer route
const dealerRoute = require("./routes/api/dealerRoute");
app.use("/dealers", dealerRoute);

const PORT = process.env.PORT || 5000;

//Static folder
app.use("client/public", express.static(path.join(__dirname, "public")));

// MongoDB
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URL;
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Sever listening on port ${PORT}.`);
});
