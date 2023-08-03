const express = require("express");
const router = express.Router();
const Appointment = require("../models/appoint");
const Patient = require("../models/user");
const Doctor = require("../models/login");
const authenticate = require("../middleware/authentication");

// GET route to fetch patients appointed to a specific doctor
router.get("/", authenticate, async (req, res) => {
    try {
        const doctorId = req.user.id; // Get the authenticated doctor's ID from the token

        // Fetch the appointments for the specified doctor
        const appointments = await Appointment.find({ doctorId: doctorId });

        // Extract the patient IDs from the appointments
        const patientIds = appointments.map((appointment) => appointment.patientId);

        // Fetch the list of patients based on the extracted patient IDs
        const patients = await Patient.find({ _id: { $in: patientIds } });

        // Transform the patient data to send only required details
        const responseData = patients.map((patient) => {
          return {
            id: patient.id,
            name: patient.name,
            email: patient.email,
            phone: patient.phone,
            gender: patient.gender,
            age: patient.age,
            chiefcomplaint: patient.chiefcomplaint,
            bloodgroup: patient.bloodgroup,
            sugarlevel: patient.sugarlevel,
            bloodpressure: patient.bloodpressure,
            timeofregistration: patient.timeofregistration,
            address: patient.address,
          };
        });

        return res.status(200).send(responseData);
      } catch (error) {
        return res.status(500).send(error);
      }
    });


module.exports = router;
