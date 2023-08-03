const express = require("express");
const router = express.Router();
const bloodModel = require("../models/blood");
const authenticate = require("../middleware/authentication");

router.delete("/:id", authenticate,async (req, res) => {
  try {
    const id = req.params.id;

    await bloodModel.findByIdAndRemove(id);
    return res.status(200).send("Deleted Successfully");
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
