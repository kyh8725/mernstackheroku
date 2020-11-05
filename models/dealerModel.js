const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DealerSchema = new Schema({
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  actual: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dealer", DealerSchema);
