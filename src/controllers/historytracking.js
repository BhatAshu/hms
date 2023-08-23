const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");

router.get("/:id", async (req, res) => {
  try {
    const patientId = req.params.id;
    const patient = await userModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const patientDetails = {
      id: patient._id,
      username: patient.username,
      email: patient.email,
      phone: patient.phone,
      gender: patient.gender,
      age: patient.age,
      date: patient.date,
      chiefcomplaint: patient.chiefcomplaint,
      bloodgroup: patient.bloodgroup,
      message: patient.message,
      address: patient.address,
      doctorId: patient.doctor ? patient.doctor._id : null,
      doctorName: patient.doctorName,
    };

    return res.status(200).json({ patient: patientDetails });
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
