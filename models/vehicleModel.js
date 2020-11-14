const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  transmission: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  hp: {
    type: String,
    trim: true,
  },
  tq: {
    type: String,
    trim: true,
  },
  vin: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    default: "https://i.ibb.co/XsgSf9Y/default-Car.png",
  },
  owners: [String],
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
