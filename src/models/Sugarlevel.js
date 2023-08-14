const mongoose = require("mongoose");

const sugarLevelTestSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient", // Reference to the Patient model
    // required: true,
  },
  fastingGlucose: {
    type: Number,
    required: true,
  },
  postprandialGlucose: {
    type: Number,
    required: true,
  },
  randomGlucose: {
    type: Number,
    required: true,
  },
  hba1c: {
    type: Number,
    required: true,
  },
  testDate: {
    type: Date,
    required: true,
  },
});

const SugarLevelTest = mongoose.model("SugarLevelTest", sugarLevelTestSchema);

module.exports = SugarLevelTest;
