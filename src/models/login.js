const {default:mongoose} = require("mongoose");
const accounts = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  password:{
    type:String,
    require:true,
  },
  role:{
    type:String,
    require:true,
  },
  specialist:{
    type:String,
  },
  image: {
    data: Buffer,
    type: String,
    required: false,
  },
  appointments: [
    {
      date: String, 
      time: String,
      timeofregistration: String,
    },
  ],
});
module.exports = mongoose.model("accounts", accounts);
