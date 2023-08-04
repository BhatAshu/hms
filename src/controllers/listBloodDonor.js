const express = require("express");
const router = express.Router();
const bloodModel = require("../models/blood");
const constants = require("../config/constants");
const authenticate = require("../middleware/authentication");
const { parse, format } = require("date-fns");

router.get("/", authenticate, async (req, res) => {
  try {
    let data = await bloodModel.find();
    data = data.map((item) => {
      const date = parse(item.date, "dd-MM-yyyy", new Date());
      const day = format(date, "dd");
      const month = format(date, "MM");
      const year = format(date, "yyyy");

      return {
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        age: item.age,
        bloodgroup: item.bloodgroup,
        noofbags: item.noofbags,
        date: `${day}-${month}-${year}`,
        address: item.address,
      };
    });

    data.sort((a, b) => {
      const dateA = parse(a.date, "dd-MM-yyyy", new Date());
      const dateB = parse(b.date, "dd-MM-yyyy", new Date());

      return dateA - dateB;
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
