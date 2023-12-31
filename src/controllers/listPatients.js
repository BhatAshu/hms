const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const docModel = require("../models/login");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await userModel.find();



    data = data.map((item) => {
      return {
        id:item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        age: item.age,
        chiefcomplaint:item.chiefcomplaint,
        bloodgroup: item.bloodgroup,
        sugarlevel: item.sugarlevel,
        bloodpressure: item.bloodpressure,
        timeofregistration: item.timeofregistration,
        address:item.address,
        message:item.message,
        doctorId: item.doctor ? item.doctor._id : null,
        doctorName: item.doctorName,
      };
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
