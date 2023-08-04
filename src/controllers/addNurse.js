const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const nurseModel = require("../models/nurse");
const docModel = require("../models/doc");
const authenticate  = require("../middleware/authentication");
const salt_round = 10;
const { upload } = require("../middleware/upload");


router.post("/",authenticate,upload.single("image"), async (req, res) => {
    try {
      const { username, email, phone,address,gender, DOB,password } = req.body;
      // console.log(req.user);
      if (req.user && req.user.role && req.user.role !== "Admin") {
        return res.send("Unauthorized user");
      }
      if (!username || username == "") {
     return res.status(201).send("Name is required");
      }
      if (!email || email == "") {
     return res.status(201).send("email is required");
      }
      if (!phone || phone == "") {
     return res.status(201).send("phone is required");
      }
      if (!req.file) {
     return res.status(201).send("image is required");
      }
      const oldEmail = await nurseModel.findOne({ email: email });
      if (oldEmail) {
     return res.status(202).send(" Email is already exist");
      }
      const oldPhone = await nurseModel.findOne({ phone });
      if (oldPhone) {
     return res.status(202).send(" Phone is already exist");
      }
      const oldEmail1 = await docModel.findOne({ email: email });
      if (oldEmail1) {
     return res.status(202).send(" Email is already exist");
      }
      const oldPhone1 = await docModel.findOne({ phone });
      if (oldPhone1) {
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

    const encryptPassword = await bcrypt.hash(password, salt_round);
      const data = await nurseModel.create({
        username: username,
        email: email,
        phone: phone,
        address:address,
        gender:gender,
        DOB:DOB,
        password: encryptPassword,
        image: req.file.originalname,
      });
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send(error.stack);
    }
  });
  module.exports = router;