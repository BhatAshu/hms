// const express = require("express");
// const router = express.Router();
// const userModel = require("../models/patient");
// const docModel = require("../models/login");
// const authenticate = require("../middleware/authentication");
// const mongoose = require("mongoose");

// router.put("/:id", authenticate, async (req, res) => {
//   try {
//     const id = req.params.id;
//     const {
//       username,
//       email,
//       gender,
//       dateofbirth,
//       phone,
//       age,
//       department,
//       chiefcomplaint,
//       date,
//       bloodgroup,
//       address,
//     } = req.body;

//     const patient = await userModel.findById(id);
//     if (!patient) {
//       return res.status(404).send("Patient not found");
//     }

//     const updatedData = {
//       id: id,
//       username: username,
//       email: email,
//       gender: gender,
//       phone: phone,
//       dateofbirth: dateofbirth,
//       age: age,
//       department: department,
//       chiefcomplaint: chiefcomplaint,
//       date: date,
//       bloodgroup: bloodgroup,
//       address: address,
//     };
//     await userModel.findByIdAndUpdate(id, updatedData);
//     const data = await userModel.findById(id);

//     return res.status(200).send(data);
//   } catch (error) {
//     return res.status(500).send(error.stack);
//   }
// });



// module.exports = router;




const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");
const docModel = require("../models/login");
const authenticate = require("../middleware/authentication");
const mongoose = require("mongoose");

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
      date,
      bloodgroup,
      address,
      doctorId,         // Add doctorId to the request body
      doctorName,       // Add doctorName to the request body
    } = req.body;

    const patient = await userModel.findById(id);
    if (!patient) {
      return res.status(404).send("Patient not found");
    }

    const updatedData = {
      id: id,
      username: username,
      email: email,
      gender: gender,
      phone: phone,
      dateofbirth: dateofbirth,
      age: age,
      department: department,
      chiefcomplaint: chiefcomplaint,
      date: date,
      bloodgroup: bloodgroup,
      address: address,
      doctor: doctorId,         // Update patient's doctorId
      doctorName: doctorName,   // Update patient's doctorName
    };
    await userModel.findByIdAndUpdate(id, updatedData);
    const data = await userModel.findById(id);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
