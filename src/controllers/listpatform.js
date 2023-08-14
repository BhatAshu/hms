const express = require("express");
const router = express.Router();
const userModel = require("../models/patient");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await userModel.find();
    console.log("Retrieved data:", data);
    data = data.map((item) => {
      return {
        id:item.id,
        username: item.username,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        age: item.age,
        bloodgroup: item.bloodgroup || "",
        address:item.address,
        testtype: item.testtype || "",
      };
    });
    console.log("Retrieved data:", data);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
