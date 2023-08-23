const { default: mongoose } = require("mongoose");
const { Router } = require("express");

const Patients = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  dateofbirth: {
    type: String,
  },
  bloodgroup: {
    type: String,
  },
  prescribe: {
    type: String,
  },
  timeofregistration: {
    type: String,
  },
  sugarlevel: {
    type: String,
  },
  bloodpressure: {
    type: String,
  },
  message: {
    type: String,
  },
  address: {
    type: String,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  doctorName: {
    type: String,
  },
  password: {
    type: String,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  status: {
    type: String,
  },
  description: {
    type: String,
  },
  prescribe: {
    type: String,
  },
  chiefcomplaint: {
    type: String,
  },
  bloodgroup: {
    type: String,
  },
  sugarlevel: {
    type: String,
  },
  bloodpressure: {
    type: String,
  },
  testtype: {
    type: String,
  },
  date: {
    type: String,
  },
  department: {
    type: String,
  },
  collecteddate: {
    type: String,
  },
  hemoglobin: {
    type: String,
  },
  whiteBloodCellCount: {
    type: String,
  },
  plateletCount: {
    type: String,
  },
  redBloodCellCount: {
    type: String,
  },
  hematocrit: {
    type: String,
  },
  meanCorpuscularVolume: {
    type: String,
  },
  meanCorpuscularHemoglobin: {
    type: String,
  },
  meanCorpuscularHemoglobinConcentration: {
    type: String,
  },
  whiteBloodCellDifferential: {
    neutrophils: {
      type: String,
    },
    lymphocytes: {
      type: String,
    },
    monocytes: {
      type: String,
    },
    eosinophils: {
      type: String,
    },
    basophils: {
      type: String,
    },
  },
  color: {
    type: String,
  },
  appearance: {
    type: String,
  },
  pHLevel: {
    type: String,
  },
  specificGravity: {
    type: String,
  },
  protein: {
    type: String,
  },
  glucose: {
    type: String,
  },
  ketones: {
    type: String,
  },
  bilirubin: {
    type: String,
  },
  blood: {
    type: String,
  },
  leukocyteEsterase: {
    type: String,
  },
  nitrite: {
    type: String,
  },
  microscopicExamination: {
    type: String,
  },
  fastingBloodSugar: {
    type: String,
  },
  postPrandialBloodSugar: {
    type: String,
  },
  randomBloodSugar: {
    type: String,
  },
  hba1c: {
    type: String,
  },
  oralGlucoseToleranceTest: {
    type: String,
  },
  fructosamine: {
    type: String,
  },
  cPeptideTest: {
    type: String,
  },
  insulinLevel: {
    type: String,
  },
  urineKetones: {
    type: String,
  },

  systolicPressure: {
    type: String,
  },
  diastolicPressure: {
    type: String,
  },
  meanArterialPressure: {
    type: String,
  },
  pulsePressure: {
    type: String,
  },
});
module.exports = mongoose.model("patients", Patients);
