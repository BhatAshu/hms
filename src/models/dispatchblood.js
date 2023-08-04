const {default:mongoose} = require("mongoose");
const account = mongoose.Schema({
  name: {
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
  date:{
    type:String,
    required:true,
  }
});
module.exports = mongoose.model("dispatchblood", account);
