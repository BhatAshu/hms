const express = require("express");
const router = express.Router();
const birthModel = require("../models/birth");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await birthModel.find();

    data = data.map((item) => {
      return {
        id:item.id,
        name: item.name,
        birthtype: item.birthtype,
        doctor:item.doctor,
        date: item.date,
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
