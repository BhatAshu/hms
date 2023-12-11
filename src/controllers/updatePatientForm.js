const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");
const authenticate = require("../middleware/authentication");
const mongoose = require("mongoose");

// Function to add minutes to a given time
const addMinutes = (time, minutes) => {
  const [hours, mins] = time.split(":");
  const currentTime = new Date();
  currentTime.setHours(parseInt(hours, 10));
  currentTime.setMinutes(parseInt(mins, 10) + minutes);
  return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
};

router.put("/:id", authenticate, async (req, res) => {
  try {
    const id = req.params.id;
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
      time,
      address,
      doctorId,         
      doctorName, 
    } = req.body;

    const endTimeNew = addMinutes(time, 30); // End time for new appointment

    // Check if an appointment already exists for the requested date
    const existingAppointments = await userModel.find({
      _id: { $ne: id }, // Exclude the current patient
      date: date,
    });

    const conflictingAppointment = existingAppointments.find((appointment) => {
      const startTimeExisting = appointment.time;
      const endTimeExisting = addMinutes(startTimeExisting, 30);
      return (
        (time >= startTimeExisting && time < endTimeExisting) ||
        (endTimeNew > startTimeExisting && endTimeNew <= endTimeExisting)
      );
    });

    if (conflictingAppointment) {
      return res
        .status(409)
        .send("An appointment already exists for this date and time.");
    }

    const patient = await userModel.findById(id);
    if (!patient) {
      return res.status(404).send("Patient not found");
    }

    const updatedData = {
      id: id,
      username: username,
      email: email,
      gender: gender,
      dateofbirth: dateofbirth,
      age: age,
      phone: phone,
      department: department,
      chiefcomplaint: chiefcomplaint,
      bloodgroup: bloodgroup,
      date: date,
      time: time,
      address: address,
      doctor: doctorId,         
      doctorName: doctorName,   
    };
    await userModel.findByIdAndUpdate(id, updatedData);
    const data = await userModel.findById(id);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;

