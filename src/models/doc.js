const { default: mongoose } = require("mongoose");

const doctorSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique:true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: String,
  },
  
  password: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("doctors", doctorSchema);
