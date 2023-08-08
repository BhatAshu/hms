const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const docModel = require("../models/login");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await userModel.find();
    data = data
      .filter((item) => item.message) 
      .map((item) => {
        return {
          id: item.id,
          firstname: item.firstname,
          age: item.age,
          chiefcomplaint: item.chiefcomplaint,
          bloodgroup: item.bloodgroup,
          message: item.message,
        };
      });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
