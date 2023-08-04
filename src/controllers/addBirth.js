const express = require("express");
const router = express.Router();
const birthModel = require("../models/birth");
const loginModel = require("../models/login");
const patientModel = require("../models/user");
const authenticate = require("../middleware/authentication");

router.post("/", authenticate, async (req, res) => {
  try {
    const {
      name,
      birthtype,
      doctor,
      date,
    } = req.body;

    // Validation checks for required fields

    const doctorExists = await loginModel.exists({ username: doctor });
    if (!doctorExists) {
      return res.status(400).send("Invalid doctor name");
    }


    // const patientExists = await patientModel.exists({ name: name });
    // if (!patientExists) {
    //   return res.status(400).send("Invalid patient name");
    // }

    const data = await birthModel.create({
      name,
      birthtype,
      doctor,
      date,
    });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
