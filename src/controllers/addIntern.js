const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const userModel = require("../models/intern");
const authenticate  = require("../middleware/authentication");
const salt_round = 10;


router.post("/",authenticate, async (req, res) => {
    try {
      const { name, email, phone,gender, dateofbirth, address,educationalinstitution,startdate,enddate,status } = req.body;
      // console.log(req.user);
      if (req.user && req.user.role && req.user.role !== "Receptionist") {
        return res.send("Unauthorized user");
      }
      if (!name || name == "") {
     return res.status(201).send("Name is required");
      }
      if (!email || email == "") {
     return res.status(201).send("email is required");
      }
      if (!phone || phone == "") {
     return res.status(201).send("phone is required");
      }
      const oldEmail = await userModel.findOne({ email: email });
      if (oldEmail) {
     return res.status(202).send(" Email is already exist");
      }
      const oldPhone = await userModel.findOne({ phone });
      if (oldPhone) {
     return res.status(202).send(" Phone is already exist");
      }


      const emailpattern = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (
     !emailpattern ||
     emailpattern.length <= 0 ||
     emailpattern.indexOf(" ") >= 0
      ) {
     return res.status(203).send("email is invalid");
      }
      const phonepattern = phone.match(/^\d{7,15}$/);
      if (
     !phonepattern ||
     phonepattern.length <= 0 ||
     phonepattern.indexOf(" ") >= 0
      ) {
     return res.status(203).send("phone is invalid");
      }
      
      console.log(req.file);
      const data = await userModel.create({
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
      });
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send(error.stack);
    }
  });
  module.exports = router;