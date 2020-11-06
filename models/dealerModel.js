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
  address: {
    type: String,
    required: true,
  },
  actual: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  fax: {
    type: String,
    required: true,
  },
  web: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dealer", DealerSchema);
