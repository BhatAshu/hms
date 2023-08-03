const express = require("express");
const router = express.Router();
const dispatchModel = require("../models/dispatchblood");
const bloodBankModel = require("../models/bloodbank");
const authenticate = require("../middleware/authentication");

router.post("/", authenticate, async (req, res) => {
  try {
    const { name, bloodgroup, noofbags, date } = req.body;

    // Validation checks for required fields

    // Check if there are enough blood bags available in the blood bank
    const bloodBank = await bloodBankModel.findOne({ bloodgroup: bloodgroup });
    if (!bloodBank || bloodBank.noofbags < noofbags) {
      return res.status(400).send("Insufficient blood bags available.");
    }

    // Create a new dispatch
    const newDispatch = await dispatchModel.create({
      name,
      bloodgroup,
      noofbags,
      date,
    });

    // Update the blood bank information
    bloodBank.noofbags -= noofbags;
    if (bloodBank.noofbags < 0) {
      bloodBank.noofbags = 0;
    }
    await bloodBank.save();

    return res.status(200).send(newDispatch);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
