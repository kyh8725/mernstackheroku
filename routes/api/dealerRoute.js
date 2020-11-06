const express = require("express");
const router = express.Router();
const Dealer = require("../../models/dealerModel");

router.get("/getall", async (req, res) => {
  try {
    const data = await Dealer.find({});
    res.send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getByName/:name", async (req, res) => {
  try {
    const data = await Dealer.find({ name: req.params.name });
    res.send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
