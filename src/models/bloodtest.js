const mongoose = require("mongoose");

const bloodTestSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "patient", // Reference to the Patient model
    // required: true,
  },
  collecteddate:{
    type:String,
  },
  hemoglobin: {
    type: Number,
    required: true,
  },
  whiteBloodCellCount: {
    type: Number,
    required: true,
  },
  plateletCount: {
    type: Number,
    required: true,
  },
  redBloodCellCount: {
    type: Number,
    required: true,
  },
  hematocrit: {
    type: Number,
    required: true,
  },
  meanCorpuscularVolume: {
    type: Number,
    required: true,
  },
  meanCorpuscularHemoglobin: {
    type: Number,
    required: true,
  },
  meanCorpuscularHemoglobinConcentration: {
    type: Number,
    required: true,
  },
  whiteBloodCellDifferential: {
    neutrophils: {
      type: Number,
      required: true,
    },
    lymphocytes: {
      type: Number,
      required: true,
    },
    monocytes: {
      type: Number,
      required: true,
    },
    eosinophils: {
      type: Number,
      required: true,
    },
    basophils: {
      type: Number,
      required: true,
    },
  },
});

const BloodTest = mongoose.model("BloodTest", bloodTestSchema);

module.exports = BloodTest;
