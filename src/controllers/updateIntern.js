const express = require("express");
const router = express.Router();
const userModel = require("../models/intern");
const authenticate = require("../middleware/authentication");

router.put("/:id", authenticate,  async (req, res) => {
  try {
    const {  name, email, phone,gender, dateofbirth, address,educationalinstitution,startdate,enddate,status } = req.body;
    const id = req.params.id;

    if (!name || name == "") {
      return res.status(201).send("Name is required");
    }
    if (!email || email == "") {
      return res.status(201).send("Email is required");
    }
    if (!phone || phone == "") {
      return res.status(201).send("Phone is required");
    }

    const emailPattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (
      !emailPattern ||
      emailPattern.length <= 0 ||
      emailPattern.indexOf(" ") >= 0
    ) {
      return res.status(202).send("Email is Inavalid!!");
    }
    const phonePattern = phone.match(/^\+?[1-9][0-9]{7,14}$/);
    if (
      !phonePattern ||
      phonePattern.length <= 0 ||
      phonePattern.indexOf(" ") >= 0
    ) {
      return res.status(202).send("Phone Number is Inavalid!!");
    }

    const updatedData = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        dateofbirth: dateofbirth,
        address:address,
        educationalinstitution: educationalinstitution,
        startdate: startdate,
        enddate: enddate,
        status: status,
    };
    await userModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack); 
  } 
});

module.exports = router;