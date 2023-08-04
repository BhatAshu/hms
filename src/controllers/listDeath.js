const express = require("express");
const router = express.Router();
const deathModel = require("../models/death");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication");

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await deathModel.find();

    data = data.map((item) => {
      const date = new Date(item.date); // Convert item.date to a Date object
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return {
        id: item.id,
        name: item.name,
        cause: item.cause,
        // date: item.date,
        date: `${day}-${month}-${year}`,
      };
    });

    data.sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-")); // Convert date string to a sortable format
      const dateB = new Date(b.date.split("-").reverse().join("-")); // Convert date string to a sortable format

      return dateA - dateB;
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
