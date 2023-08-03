const express = require("express");
const router = express.Router();
const bloodModel = require("../models/dispatchblood");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication")

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await bloodModel.find();

    data = data.map((item) => {
      return {
        id:item.id,
        name: item.name,
        bloodgroup: item.bloodgroup,
        noofbags:item.noofbags,
        date: item.date,
      };
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
