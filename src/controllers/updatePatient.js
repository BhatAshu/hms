const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");
const docModel = require("../models/login");
const authenticate = require("../middleware/authentication");
const mongoose = require("mongoose");

const isValidObjectId = (req, res, next) => {
  const { doctorId } = req.body;
  if (doctorId && !mongoose.Types.ObjectId.isValid(doctorId)) {
    return res.status(400).json({ error: "Invalid doctorId" });
  }
  next();
};

router.put("/:id", authenticate, isValidObjectId, async (req, res) => {
  try {
    const id = req.params.id;
    const {
      username,
      email,
      phone,
      gender,
      age,
      chiefcomplaint,
      timeofregistration,
      address,
      bloodgroup,
      sugarlevel,
      bloodpressure,
      message,
      prescribe,
      description,
      doctorId,
    } = req.body;

    const patient = await userModel.findById(id);
    if (!patient) {
      return res.status(404).send("Patient not found");
    }

    const previousDoctorId = patient.doctor;
    const previousDoctorName = patient.doctorName;
    
    let updatedDoctorId = previousDoctorId;
    let updatedDoctorName = previousDoctorName;
    if (doctorId) {
      const doctor = await docModel.findById(doctorId);
      if (doctor) {
        updatedDoctorId = doctor._id;
        updatedDoctorName = doctor.username;
      }
    }

    const updatedData = {
      doctor: updatedDoctorId,
      doctorName: updatedDoctorName,
      id: id,
      username: username,
      email: email,
      phone: phone,
      gender: gender,
      age: age,
      chiefcomplaint: chiefcomplaint,
      bloodgroup: bloodgroup,
      timeofregistration: timeofregistration,
      sugarlevel: sugarlevel,
      bloodpressure: bloodpressure,
      address: address,
      prescribe: prescribe,
      description: description,
      message: message,
    };

    await userModel.findByIdAndUpdate(id, updatedData);
    const data = await userModel.findById(id);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});



module.exports = router;

