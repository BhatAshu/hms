const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/patient");
const docModel = require("../models/login");
const authenticate = require("../middleware/authentication");
// const { upload } = require("../middleware/upload");
const salt_round = 10;
const mongoose = require("mongoose");



const isValidObjectId = (req, res, next) => {
  const { doctorId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(doctorId)) {
    return res.status(400).json({ error: "Invalid doctorId" });
  }
  next();
};



router.post("/", authenticate, isValidObjectId,async (req, res) => {
  try {
   
    const { firstname,lastname, email, phone, gender, age, chiefcomplaint, bloodgroup, timeofregistration, sugarlevel, bloodpressure, address, message,doctorId,status,prescribe } = req.body;

   
    const doctor = await docModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).send("Doctor not found");
    }
    
    

    const data = await userModel.create({
      firstname: firstname,
      lastname: lastname,
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
      doctor: doctorId, 
      doctorName: doctor.username, 
      status: status,
      prescribe: prescribe,
    });

    const responseData = {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      age: data.age,
      chiefcomplaint: data.chiefcomplaint,
      bloodgroup: data.bloodgroup,
      timeofregistration: data.timeofregistration,
      sugarlevel: data.sugarlevel,
      bloodpressure: data.bloodpressure,
      address: data.address,
      message: data.message,
      doctorId: doctor.id, 
      doctorName: doctor.username, 
      status: data.status,
      prescribe: data.prescribe,
    };

    return res.status(200).send(responseData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;




// const express = require("express");
// const router = express.Router();
// const userModel = require("../models/user");
// const docModel = require("../models/login");
// const constants = require("../config/constants");
// const authenticate = require("../middleware/authentication");

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const data = await userModel.find();

//     const responseData = await Promise.all(
//       data.map(async (item) => {
//         const doctor = await docModel.findById(item.doctorId);
//         return {
//           id: item.id,
//           name: item.name,
//           email: item.email,
//           phone: item.phone,
//           gender: item.gender,
//           age: item.age,
//           chiefcomplaint: item.chiefcomplaint,
//           bloodgroup: item.bloodgroup,
//           sugarlevel: item.sugarlevel,
//           bloodpressure: item.bloodpressure,
//           timeofregistration: item.timeofregistration,
//           address: item.address,
//           message: item.message,
//           doctorId: item.doctorId,
//           doctorName: doctor ? doctor.username : null,
//         };
//       })
//     );

//     return res.status(200).send(responseData);
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// });

// module.exports = router;
