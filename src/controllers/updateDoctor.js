const express = require("express");
const router = express.Router();
const docModel = require("../models/doc");
const authenticate = require("../middleware/authentication");
const { upload } = require("../middleware/upload");

router.put("/:id", authenticate, upload.single("image"), async (req, res) => {
  try {
    const { username, email, phone,address,gender, DOB,specialist,isAvailable} = req.body;
    const id = req.params.id;

    if (!username || username == "") {
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
    if(!req.file) {
      return res.status(201).send("Image is required");
    }

    const updatedData = {
        username: username,
        email: email,
        phone: phone,
        address:address,
        gender:gender,
        DOB:DOB,
        specialist:specialist,
        isAvailable:isAvailable,
    };
    if(req.file){
      updatedData.image=req.file.originalname
    }
    await docModel.findByIdAndUpdate(id, updatedData);
    res.status(200).send(updatedData);
  } catch (error) {
    return res.status(500).send(error.stack); //if you put "error.stack" it will shows error with message on which line
  } //instaed of "error.stack" one can use "error.message"
});

module.exports = router;
