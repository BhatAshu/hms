// updateBloodDonor.js

const express = require("express");
const router = express.Router();
const bloodModel = require("../models/blood");
const bloodBankModel = require("../models/bloodbank");
const authenticate = require("../middleware/authentication");

// PUT route to update a blood donor
router.put("/:id", authenticate, async (req, res) => {
  try {
    const donorId = req.params.id;

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

    // Find the blood donor to be updated
    const bloodDonor = await bloodModel.findById(donorId);

    if (!bloodDonor) {
      return res.status(404).json({ error: "Blood donor not found" });
    }

    const previousBloodgroup = bloodDonor.bloodgroup;
    const previousNoofbags = bloodDonor.noofbags;

    // Update the blood donor's information
    bloodDonor.name = name;
    bloodDonor.email = email;
    bloodDonor.phone = phone;
    bloodDonor.gender = gender;
    bloodDonor.age = age;
    bloodDonor.bloodgroup = bloodgroup;
    bloodDonor.noofbags = noofbags;
    bloodDonor.date = date;
    bloodDonor.address = address;

    await bloodDonor.save();

    // Update the blood bank information
    let bloodBank = await bloodBankModel.findOne({ bloodgroup: previousBloodgroup.toUpperCase() });
    if (bloodBank) {
      bloodBank.noofbags -= parseInt(previousNoofbags, 10);
      if (bloodBank.noofbags < 0) {
        bloodBank.noofbags = 0;
      }
    }
    await bloodBank.save();

    // Update the blood bank information for the new blood group
    bloodBank = await bloodBankModel.findOne({ bloodgroup: bloodgroup.toUpperCase() });
    if (bloodBank) {
      bloodBank.noofbags += parseInt(noofbags, 10);
    } else {
      bloodBank = new bloodBankModel({ bloodgroup: bloodgroup.toUpperCase(), noofbags: parseInt(noofbags, 10) });
    }
    await bloodBank.save();

    return res.status(200).json({ message: "Blood donor updated successfully" });
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
