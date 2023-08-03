// routes/appointments.js

const express = require("express");
const router = express.Router();
const Appointment = require("../models/appoint");
const Patient = require("../models/user");
const Doctor = require("../models/login");
const authenticate = require("../middleware/authentication");

// POST route to create a new appointment
router.post("/", authenticate, async (req, res) => {
  try {
    const { patientId, doctorId, appointmentDate } = req.body;

    // Check if the provided patientId and doctorId exist in the respective collections
    const patient = await Patient.findById(patientId);
    const doctor = await Doctor.findById(doctorId);
    if (!patient || !doctor) {
      return res.status(404).send("Patient or Doctor not found");
    }

    // Create a new appointment with the provided appointmentDate
    const appointment = await Appointment.create({
      patientId: patientId,
      doctorId: doctorId,
      appointmentDate: appointmentDate, // Make sure to set the appointmentDate field
    });

    return res.status(200).send(appointment);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
