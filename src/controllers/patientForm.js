const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");
const authenticate = require("../middleware/authentication");

router.post("/",authenticate, async (req, res) => {
  try {
    const {
      username,
      email,
      gender,
      dateofbirth,
      phone,
      age,
      department,
      chiefcomplaint,
      bloodgroup,
      date,
      address,
    } = req.body;
    console.log(req.user);
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res
        .status(400)
        .json({ error: "Patient with the same email already exists" });
    }
    
    const patient = new Patient({
      username,
      email,
      gender,
      dateofbirth,
      phone,
      age,
      department,
      chiefcomplaint,
      bloodgroup,
      date,
      address,
    });
    await patient.save();
    res.status(201).json({ message: "Patient registered successfully", patient });
  } catch (error) {
    console.error("Error registering patient:", error);
    res.status(500).send(error.stack);
  }
});

module.exports = router;

