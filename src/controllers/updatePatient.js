const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
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
    // const { doctorId } = req.body;
    const id = req.params.id;
    const { name, email, phone, gender, age, chiefcomplaint, timeofregistration, address, bloodgroup, sugarlevel, bloodpressure, message,doctorId } = req.body;

    const doctor = await docModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).send("Doctor not found");
    }

    const updatedData = {
      doctor: doctorId,
      doctorName: doctor.username,
      id: id,
      name: name,
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
      message: message,
    };

    await userModel.findByIdAndUpdate(id, updatedData);
    const data = await userModel.findById(id);

    const responseData = {
      id: id,
      name: name,
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
      message: message,
      doctorId: doctor.id,
      // doctorName: doctor.username,
      ...(doctorId && { doctor: doctorId, doctorName: doctor.username }),
    };

    return res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
