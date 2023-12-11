const express = require("express");
const router = express.Router();
const doctorModel = require("../models/login");
const authenticate = require("../middleware/authentication");

router.get("/:doctorId", authenticate, async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const { date, time, timeofregistration } = req.query;

    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).send("Doctor not found");
    }

   const isAvailable = doctor.appointments.every((appointment) => {
  const existingStartTime = new Date(appointment.date + " " + appointment.time);
  const existingEndTime = new Date(appointment.date + " " + appointment.timeofregistration);

  const requestedStartTime = new Date(date + " " + time);
  const requestedEndTime = new Date(date + " " + timeofregistration);

  const overlaps =
    (requestedStartTime >= existingStartTime && requestedStartTime < existingEndTime) ||
    (requestedEndTime > existingStartTime && requestedEndTime <= existingEndTime);

  return !overlaps;
});


    return res.status(200).json({ available: isAvailable });
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
