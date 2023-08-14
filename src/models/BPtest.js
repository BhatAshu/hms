const mongoose = require("mongoose");

const bloodPressureTestSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient", // Reference to the Patient model
    // required: true,
  },
  systolic: {
    type: Number,
    required: true,
  },
  diastolic: {
    type: Number,
    required: true,
  },
  pulseRate: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const BloodPressureTest = mongoose.model("BloodPressureTest", bloodPressureTestSchema);

module.exports = BloodPressureTest;
