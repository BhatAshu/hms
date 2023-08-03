const express = require("express");
const router = express.Router();
const deathModel = require("../models/death");
const authenticate = require("../middleware/authentication");
// const { format } = require("date-fns");


router.post("/", authenticate, async (req, res) => {
  try {
    const {
      name,
      cause,
      date,
    } = req.body;

    // const formattedDate = format(new Date(date), "dd-MM-yyyy");
    // const formattedTime = format(new Date(date), "hh:mm a");
    // const formattedDate = format(new Date(date), "dd-MM-yyyy");
    // const formattedDateTime = `${formattedDate} ${formattedTime}`;
      

    // Validation checks for required fields

    const data = await deathModel.create({
      name,
      cause,
      date,
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
