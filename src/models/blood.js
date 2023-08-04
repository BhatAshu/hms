const {default:mongoose} = require("mongoose");
const account = mongoose.Schema({
  name: {
    type: String,
    required : true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    required : true,
    unique: true,
  },
  gender: {
    type: String,
    required : true,
  },
  age: {
    type: String,
    required : true,
  },
  bloodgroup: {
    type: String,
    required : true,
  },
  noofbags:{
    type:Number,
    required:true,
  },
  date: {
    type: String,
    required : true,
  },
  address: {
    type: String,
    required : true,
  },
});
module.exports = mongoose.model("blooddonor", account);
