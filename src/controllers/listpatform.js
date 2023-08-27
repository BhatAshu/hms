// const express = require("express");
// const router = express.Router();
// const userModel = require("../models/patient");
// const constants = require("../config/constants");
// const authenticate = require("../middleware/authentication")

// router.get("/", authenticate, async (req, res) => {
//   try {
//     let data = await userModel.find();
//     data = data.map((item) => {
//       return {
//         id:item.id,
//         username: item.username,
//         email: item.email,
//         gender: item.gender,
//         dateofbirth: item.dateofbirth,
//         phone: item.phone,
//         age: item.age,
//         department: item.department,
//         doctorId: item.doctor ? item.doctor._id : null,
//         doctorName: item.doctorName,
//         timeofregistration: item.timeofregistration,
//         department: item.department,
//         chiefcomplaint: item.chiefcomplaint,
//         bloodgroup: item.bloodgroup || "",
//         date:item.date,
//         address:item.address,
//         message:item.message,
//         description:item.description,
//         testtype: item.testtype || "",
//       };
//     });
//     return res.status(200).send(data);
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const patientModel = require("../models/patient");
const authenticate = require("../middleware/authentication");

router.get("/", authenticate, async (req, res) => {
  try {
    // Get the current date in the format "dd/mm/yyyy"
    const currentDate = new Date().toLocaleDateString("en-GB");

    // Query the database to find patients with the current date
    const data = await patientModel.find({
      date: currentDate,
    });

    // Format the retrieved data
    const formattedData = data.map((item) => ({
      id: item._id,
      username: item.username,
      email: item.email,
      gender: item.gender,
      age: item.age,
      phone: item.phone,
      dateofbirth: item.dateofbirth,
      chiefcomplaint: item.chiefcomplaint,
      bloodgroup: item.bloodgroup,
      department: item.department,
      bloodpressure: item.bloodpressure,
      timeofregistration: item.timeofregistration,
      date: item.date,
      time: item.time,
      address: item.address,
      message: item.message,
      doctorId: item.doctor ? item.doctor._id : null,
      doctorName: item.doctorName,
      message: item.message,
      description: item.description,
      status: item.status,
    }));

    return res.status(200).json(formattedData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
