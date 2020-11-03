require("dotenv").config();
const express = require("express");
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// routes
const vehicleRoute = require("./routes/api/vehicleRoute");
app.use("/vehicles", vehicleRoute);

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

//Static public folder
app.use("client/public", express.static(path.join(__dirname, "public")));

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
