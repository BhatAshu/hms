const express = require("express");
const router = express.Router();
const userModel = require("../models/login");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    // Add the condition to fetch only users with role "Doctor"
    let data = await userModel.find({ role: "Doctor" });

    data = data.map((item) => {
      return {
        id: item.id,
        username: item.username,
        email: item.email,
        phone: item.phone,
        address: item.address,
        role: item.role,
        image: constants.imagePath + item.image,
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
