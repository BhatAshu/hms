const express = require("express");
const router = express.Router();
const birthModel = require("../models/birth");
const authenticate = require("../middleware/authentication");

router.put("/:id", authenticate, async (req, res) => {
  try {
    const { name, birthtype, doctor, date } = req.body;
    const id = req.params.id;

    if (!name || name === "") {
      return res.status(201).send("Name is required");
    }
    if (!birthtype || birthtype === "") {
      return res.status(201).send("Birthtype is required");
    }
    if (!doctor || doctor === "") {
      return res.status(201).send("Doctor is required");
    }
    if (!date || date === "") {
      return res.status(201).send("Date is required");
    }

    const updatedData = {
      name: name,
      birthtype: birthtype,
      doctor: doctor,
      date: date,
    };
    await birthModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
