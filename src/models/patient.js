const { default: mongoose } = require("mongoose");
const { Router } = require("express");

const Patients = mongoose.Schema({
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
  chiefcomplaint: {
    type: String,
  },
  bloodgroup: {
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
  prescribe: {
    type: String,
  },
  testtype: {
    type: String,
  },
  collecteddate: {
    type: String,
  },
  hemoglobin: {
    type: Number,
  },
  whiteBloodCellCount: {
    type: Number,
  },
  plateletCount: {
    type: Number,
  },
  redBloodCellCount: {
    type: Number,
  },
  hematocrit: {
    type: Number,
  },
  meanCorpuscularVolume: {
    type: Number,
  },
  meanCorpuscularHemoglobin: {
    type: Number,
  },
  meanCorpuscularHemoglobinConcentration: {
    type: Number,
  },
  whiteBloodCellDifferential: {
    neutrophils: {
      type: Number,
    },
    lymphocytes: {
      type: Number,
    },
    monocytes: {
      type: Number,
    },
    eosinophils: {
      type: Number,
    },
    basophils: {
      type: Number,
    },
    color: {
      type: String,
    },
    appearance: {
      type: String,
    },
    pHLevel: {
      type: Number,
    },
    specificGravity: {
      type: Number,
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
      type: Number,
    },
    postPrandialBloodSugar: {
      type: Number,
    },
    randomBloodSugar: {
      type: Number,
    },
    hba1c: {
      type: Number,
    },
    oralGlucoseToleranceTest: {
      type: Number,
    },
    fructosamine: {
      type: Number,
    },
    cPeptideTest: {
      type: Number,
    },
    insulinLevel: {
      type: Number,
    },
    urineKetones: {
      type: String,
    },

    systolicPressure: {
      type: Number,
    },
    diastolicPressure: {
      type: Number,
    },
    meanArterialPressure: {
      type: Number,
    },
    pulsePressure: {
      type: Number,
    },
  },
});
module.exports = mongoose.model("patients", Patients);
