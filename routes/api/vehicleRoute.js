const express = require("express");
const router = express.Router();
const Vehicle = require("../../models/vehicleModel");

router.get("/allvehicles", async (req, res) => {
  try {
    const data = await Vehicle.find({});
    res.send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get vehicles owned by a user
router.get("/:userName", async (req, res) => {
  try {
    const data = await Vehicle.find({ owners: req.params.userName });
    res.send(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// finds car with matching model

router.get("/get/:id", async (req, res) => {
  try {
    const car = await Vehicle.find({ _id: req.params.id });
    res.status(200).json(car);
  } catch (err) {
    res.status(400).json(err);
  }
});

// finds car with matching model and updates
router.post("/update/:id", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { _id: req.params.id },
      {
        owners: req.body.owners,
      },
      { new: true }
    );
    res.status(200).json(updatedVehicle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/newvehicles", async (req, res) => {
  const vehicle = new Vehicle({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    transmission: req.body.transmission,
    color: req.body.color,
    type: req.body.type,
    price: req.body.price,
    img: req.body.img,
    owners: req.body.owners,
  });
  try {
    const savedVehicle = await vehicle.save();
    res.status(201).send(savedVehicle);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
