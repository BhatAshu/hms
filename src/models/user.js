const mongoose = require("mongoose");
const userModel = mongoose.Schema({
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
  status:{
    type:String,
  },
  prescribe:{
    type:String,
  },
});
module.exports = mongoose.model("user", userModel);
