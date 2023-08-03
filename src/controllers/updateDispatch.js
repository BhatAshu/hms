const express = require("express");
const router = express.Router();
const dispatchModel = require("../models/dispatchblood");
const authenticate = require("../middleware/authentication");

router.put("/:id", authenticate, async (req, res) => {
  try {
    const { name, bloodgroup, noofbags, date } = req.body;
    const id = req.params.id;

    if (!name || name === "") {
      return res.status(201).send("Name is required");
    }
    if (!bloodgroup || bloodgroup === "") {
      return res.status(201).send("Bloodgroup is required");
    }
    if (!noofbags || noofbags === "") {
      return res.status(201).send("NoofBags is required");
    }
    if (!date || date === "") {
      return res.status(201).send("Date is required");
    }

    const updatedData = {
      name: name,
      bloodgroup: bloodgroup,
      noofbags: noofbags,
      date: date,
    };
    await dispatchModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
