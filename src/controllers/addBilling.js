const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const userModel = require("../models/patient"); 

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      username,
      email,
      phone,
      gender,
      address,
      date,
      time,
      consultationFee,
      laboratoryFee,
    } = req.body;

    const updatedData = {
      username: username,
      email: email,
      phone: phone,
      gender: gender,
      address: address,
      date: date,
      time: time,
      consultationFee: consultationFee,
      laboratoryFee: laboratoryFee,
      // Add other fields you want to update here
    };

    await userModel.findByIdAndUpdate(id, updatedData);

    // Generate PDF with the updated patient details
    const doc = new PDFDocument();
    doc.pipe(res);

    // Page border
    doc.rect(0, 0, doc.page.width, doc.page.height).stroke();

    // Title
    doc.font("Helvetica-Bold").fontSize(16).text(`Patient Details and Invoice`, { align: "center" });
    doc.moveDown(1.5);
    
    // Patient Information
    doc.font("Helvetica").fontSize(12);
    doc.text(`Patient Name: ${username}`);
    doc.text(`Email: ${email}`);
    doc.text(`Phone: ${phone}`);
    doc.text(`Gender: ${gender}`);
    doc.text(`Address: ${address}`);
    doc.text(`Date: ${date}`);
    doc.text(`Time: ${time}`);
    doc.text(`ConsultationFee: ${consultationFee}`);
    doc.text(`LaboratoryFee: ${laboratoryFee}`);
    doc.end();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.stack);
    // res.status(500).json({ error: "An error occurred while generating the PDF" });
  }
});

module.exports = router;