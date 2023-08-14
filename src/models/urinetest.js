const mongoose = require("mongoose");

const urineTestSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient", // Reference to the Patient model
    // required: true,
  },
  date:{
    type:String,
  },
  color: {
    type: String,
    required: true,
  },
  appearance: {
    type: String,
    required: true,
  },
  specificGravity: {
    type: Number,
    required: true,
  },
  pH: {
    type: Number,
    required: true,
  },
  glucose: {
    type: String,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
  ketones: {
    type: String,
    required: true,
  },
  bilirubin: {
    type: String,
    required: true,
  },
  urobilinogen: {
    type: String,
    required: true,
  },
  nitrite: {
    type: String,
    required: true,
  },
  leukocytes: {
    type: String,
    required: true,
  },
});

const UrineTest = mongoose.model("UrineTest", urineTestSchema);

module.exports = UrineTest;
