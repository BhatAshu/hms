const express = require("express");
const router = express.Router();
const nurseModel = require("../models/nurse");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await nurseModel.find();
    data = data.map((item) => {
      return {
        id: item.id,
        username:item.username,
        email:item. email,
        phone:item. phone,
        address:item.address,
        gender:item.gender,
        DOB:item.DOB,
        image: constants.imagePath + item.image,
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
