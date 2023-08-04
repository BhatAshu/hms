const mongoose = require("mongoose");

const bloodBankSchema = mongoose.Schema({
  bloodgroup: {
    type: String,
    required: true,
    unique: true,
  },
  noofbags: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("BloodBank", bloodBankSchema);
