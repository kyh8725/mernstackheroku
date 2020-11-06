const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  make: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  transmission: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
