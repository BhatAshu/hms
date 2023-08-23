const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await userModel.find();
    data = data.map((item) => {
      return {
        id:item.id,
        username: item.username,
        email: item.email,
        gender: item.gender,
        dateofbirth: item.dateofbirth,
        phone: item.phone,
        age: item.age,
        department: item.department,
        doctorId: item.doctor ? item.doctor._id : null,
        doctorName: item.doctorName,
        timeofregistration: item.timeofregistration,
        department: item.department,
        chiefcomplaint: item.chiefcomplaint,
        bloodgroup: item.bloodgroup || "",
        date:item.date,
        address:item.address,
        testtype: item.testtype || "",
      };
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;


// const express = require("express");
// const router = express.Router();
// const patientModel = require("../models/patient");
// const authenticate = require("../middleware/authentication");

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const currentDate = new Date();
//     const formattedCurrentDate = formatDate(currentDate);

//     // Fetch patient data for the current date only
//     const data = await patientModel.find({
//       date: formattedCurrentDate,
//     });

//     const formattedData = data.map((item) => {
//       return {
//         id: item.id,
//         username: item.username,
//         email: item.email,
//         gender: item.gender,
//         age: item.age,
//         phone: item.phone,
//         dateofbirth: item.dateofbirth,
//         chiefcomplaint: item.chiefcomplaint,
//         bloodgroup: item.bloodgroup,
//         sugarlevel: item.sugarlevel,
//         bloodpressure: item.bloodpressure,
//         timeofregistration: item.timeofregistration,
//         date: formattedCurrentDate,
//         time: item.time,
//         address: item.address,
//         message: item.message,
//         doctorId: item.doctor ? item.doctor._id : null,
//         doctorName: item.doctorName,
//         status: item.status,
//       };
//     });

//     return res.status(200).json(formattedData);
//   } catch (error) {
//     return res.status(500).send(error.stack);
//   }
// });

// function formatDate(inputDate) {
//   const day = inputDate.getDate().toString().padStart(2, "0");
//   const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
//   const year = inputDate.getFullYear();
//   return `${day}-${month}-${year}`;
// }

// module.exports = router;