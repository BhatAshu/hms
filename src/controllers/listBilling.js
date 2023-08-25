const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const path = require("path");
const userModel = require("../models/patient"); 

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await userModel.findById(id);
    
const consultationFee = parseFloat(patient.consultationFee); 
const laboratoryFee = parseFloat(patient.laboratoryFee);     
const taxRate = 0.1; 
const consultationTax = consultationFee * taxRate;
const laboratoryTax = laboratoryFee * taxRate;

    const doc = new PDFDocument();

    const borderWidth = 10; 
    const borderGap = 20;   
    doc.rect(borderGap, borderGap, doc.page.width - 2 * borderGap, doc.page.height - 2 * borderGap).stroke();

    // Logo
    const logoPath = path.resolve("public/profile/logo.jpg");
    doc.image(logoPath, 50, 20, { width: 100 });

    // Hospital details
    doc.font("Helvetica-Bold").fontSize(12).text("Hospital Name: MEDIFACE", 200, 50);
    doc.font("Helvetica").fontSize(12).text("Email: infomediface@gmail.com", 200, 70);
    doc.font("Helvetica").fontSize(12).text("Phone: 123-456-7890", 200, 90);
    doc.font("Helvetica").fontSize(12).text("Address: 123 Hospital Street, Bangalore, India", 200, 110);

    doc.moveDown(2.5); 
const titleText1 = "Patient Details and Invoice";
const titleWidth1 = doc.widthOfString(titleText1);
const titleX1 = (doc.page.width - titleWidth1) / 2; // Calculate the centered X position
doc.font("Helvetica-Bold").fontSize(15).text(titleText1, titleX1, doc.y);
doc.moveDown(1);

    doc.moveDown(0.5); 
    doc.font("Helvetica").fontSize(12);
    doc.text(`Patient Id: ${patient.id}`, 50, doc.y);
    doc.text(`patient Name: ${patient.username}`, 50, doc.y);
    doc.text(`Email: ${patient.email}`, 50, doc.y);
    doc.text(`Phone: ${patient.phone}`, 50, doc.y);
    doc.text(`Gender: ${patient.gender}`, 50, doc.y);
    doc.text(`Address: ${patient.address}`, 50, doc.y);
    

    const collectedDateText = `Date: ${patient.date}`;
    const collectedDateTextWidth = doc.widthOfString(collectedDateText);
    const collectedDateX = doc.page.width - collectedDateTextWidth - 80;
    const collectedDateY = doc.y - 50; // No need to adjust Y position
    doc.text(collectedDateText, collectedDateX, collectedDateY);

    const collectedTimeText = `Time: ${patient.time}`;
    const collectedTimeTextWidth = doc.widthOfString(collectedTimeText);
    const collectedTimeX = doc.page.width - collectedTimeTextWidth - 110;
    const collectedTimeY = doc.y - 40; // No need to adjust Y position
    doc.text(collectedTimeText, collectedTimeX, collectedTimeY);
    
   
    doc.moveDown(6); // Add spacing
    const titleText = " Invoice";
    const titleWidth = doc.widthOfString(titleText);
    const titleX = (doc.page.width - titleWidth) / 2;
    doc.font("Helvetica-Bold").fontSize(14).text(titleText, titleX, doc.y).moveDown(1);

    const tableHeaders = ["Service Name", "Amount"];
        const tableData = [
          ["Consultation Fee", consultationFee.toFixed(2)],
          ["Consultation Tax (10%)", consultationTax.toFixed(2)],
          ["Laboratory Fee", laboratoryFee.toFixed(2)],
          ["Laboratory Tax (10%)", laboratoryTax.toFixed(2)],
          
        ];

        const columnWidth = doc.page.width / tableHeaders.length;
            const startX = 50; // Starting X position
            const startY = doc.y;
            const lineHeight = 30;
        
            // Draw table headers
            doc.font("Helvetica-Bold").fontSize(12);
            tableHeaders.forEach((header, columnIndex) => {
              doc.text(header, startX + columnIndex * columnWidth, startY);
            });
        
            // Draw table rows
            doc.font("Helvetica").fontSize(12);
            tableData.forEach((rowData, rowIndex) => {
              rowData.forEach((cell, columnIndex) => {
                doc.text(cell, startX + columnIndex * columnWidth, startY + (rowIndex + 1) * lineHeight);
              });
            });

            const totalPayment = consultationFee + consultationTax + laboratoryFee + laboratoryTax;
            doc.moveDown(1);
            doc.font("Helvetica-Bold").fontSize(14).text(`Total Payment: $${totalPayment.toFixed(2)}`, titleX, doc.y).moveDown(1);

            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", `attachment; filename="blood_test_report.pdf"`);
            doc.pipe(res);
            doc.end();
          } catch (error) {
            console.error(error);
           return res.status(500).json(error.stack);
          }
        });
        
        module.exports = router;