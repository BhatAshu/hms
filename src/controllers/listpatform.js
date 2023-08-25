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
        message:item.message,
        description:item.description,
        testtype: item.testtype || "",
      };
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;