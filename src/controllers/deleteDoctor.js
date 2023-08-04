const express = require("express");
const router = express.Router();
const docModel = require("../models/doc");
const authenticate = require("../middleware/authentication");

router.delete("/:id", authenticate,async (req, res) => {
  try {
    const id = req.params.id;

    await docModel.findByIdAndRemove(id);
    return res.status(200).send("Deleted Successfully");
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
