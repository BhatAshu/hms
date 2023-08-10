// const express = require('express');
// const router = express.Router();
// const PDFDocument = require('pdfkit');
// const Patient = require('../models/user'); // Assuming you have a model for the patients in MongoDB

// // Endpoint to search for patients by name and get their reports
// router.get('/:firstname', async (req, res) => {
//   try {
//     const patientName = req.params.firstname;
//     const patients = await Patient.find({ firstname: patientName }); // Find patients with the given name

//     if (patients.length === 0) {
//       return res.status(404).json({ error: 'No patients found with the given name' });
//     }

//     // Create a PDF document
//     const doc = new PDFDocument();

//     // Set the response headers for PDF download
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=${patientName}_report.pdf`);

//     // Customize the PDF layout and content based on the patient data
//     patients.forEach((patient, index) => {
//       if (index > 0) {
//         doc.addPage(); // Add a new page for each patient
//       }
//       doc.text(`Report for Patient ID: ${patient._id}`);
//       doc.text(`Patient Name: ${patient.firstname}`);
//       doc.text(`Email: ${patient.email}`);
//       doc.text(`Gender: ${patient.gender}`);
//       doc.text(`Phone: ${patient.phone}`);
//       doc.text(`Age: ${patient.age}`);
//       doc.text(`Blood Group: ${patient.bloodgroup}`);
//       doc.text(`Chief Complaint: ${patient.chiefcomplaint}`);
//       doc.text(`Sugar Level: ${patient.sugarlevel}`);
//       doc.text(`Blood Pressure: ${patient.bloodpressure}`);
//       doc.text(`Address: ${patient.address}`);
//       doc.text(`Doctor Name: ${patient.doctorName}`);
//       doc.text(`Medicine: ${patient.medicine}`);
//     });

//     // Pipe the PDF to the response and end the document
//     doc.pipe(res);
//     doc.end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the patient reports' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Patient = require('../models/user'); // Assuming you have a model for the patients in MongoDB

// Endpoint to search for patients by name and get their reports
router.get('/:firstname', async (req, res) => {
  try {
    const patientName = req.params.firstname;
    const patients = await Patient.find({ firstname: patientName }); // Find patients with the given name

    if (patients.length === 0) {
      return res.status(404).json({ error: 'No patients found with the given name' });
    }

    // Customize the JSON response based on the patient data
    const patientReports = patients.map(patient => ({
      id: patient._id,
      firstname: patient.firstname,
      email: patient.email,
      gender: patient.gender,
      phone: patient.phone,
      age: patient.age,
      bloodgroup: patient.bloodgroup,
      chiefcomplaint: patient.chiefcomplaint,
      sugarlevel: patient.sugarlevel,
      bloodpressure: patient.bloodpressure,
      address: patient.address,
      doctorName: patient.doctorName,
      medicine: patient.medicine,
    }));

    res.json(patientReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the patient reports' });
  }
});

module.exports = router;
