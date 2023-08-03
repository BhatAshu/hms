// addBloodDonor.js

const express = require("express");
const router = express.Router();
const bloodModel = require("../models/blood");
const bloodBankModel = require("../models/bloodbank");
const authenticate = require("../middleware/authentication");

// POST route to add a new blood donor
router.post("/", authenticate, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      gender,
      age,
      bloodgroup,
      noofbags,
      date,
      address,
    } = req.body;

    // Validation checks for required fields

    const newDonor = await bloodModel.create({
      name,
      email,
      phone,
      gender,
      age,
      bloodgroup,
      noofbags,
      date,
      address,
    });

    // Update the blood bank information
    let bloodBank = await bloodBankModel.findOne({ bloodgroup: bloodgroup.toUpperCase() });
    if (bloodBank) {
      bloodBank.noofbags += parseInt(noofbags, 10);
    } else {
      bloodBank = new bloodBankModel({ bloodgroup: bloodgroup.toUpperCase(), noofbags: parseInt(noofbags, 10) });
    }
    await bloodBank.save();

    return res.status(200).send(newDonor);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
