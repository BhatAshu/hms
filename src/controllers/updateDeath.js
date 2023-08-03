const express = require("express");
const router = express.Router();
const deathModel = require("../models/death");
const authenticate = require("../middleware/authentication");

router.put("/:id", authenticate, async (req, res) => {
  try {
    const { name, cause, date } = req.body;
    const id = req.params.id;

    if (!name || name === "") {
      return res.status(400).send("Name is required");
    }
    if (!cause || cause === "") {
      return res.status(400).send("Cause is required");
    }
    if (!date || date === "") {
      return res.status(400).send("Date is required");
    }

    const parsedDate = parseDateWithFormat(date, "DD-MM-YYYY");
    if (!parsedDate) {
      return res.status(400).send("Invalid date format");
    }

    const updatedData = {
      name: name,
      cause: cause,
      date: parsedDate,
    };
    await deathModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

function parseDateWithFormat(dateString, format) {
  const [day, month, year] = dateString.split("-");
  const parsedDay = parseInt(day);
  const parsedMonth = parseInt(month) - 1;
  const parsedYear = parseInt(year);

  if (!isNaN(parsedDay) && !isNaN(parsedMonth) && !isNaN(parsedYear)) {
    return new Date(parsedYear, parsedMonth, parsedDay);
  }

  return null;
}

module.exports = router;
