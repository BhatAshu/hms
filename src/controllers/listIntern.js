const express = require("express");
const router = express.Router();
const userModel = require("../models/intern");
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
        dateofbirth: item.dateofbirth,
        address:item.address,
        educationalinstitution: item.educationalinstitution,
        startdate: item.startdate,
        enddate: item.enddate,
        department: item.department,
        status: item.status,
        role: item.role,
        image: constants.imagePath +item.image,
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
