const {default:mongoose} = require("mongoose");
const account = mongoose.Schema({
  name: {
    type: String,
    required : true,
  },
  birthtype: {
    type: String,
    required:true,
  },
  doctor: {
    type: String,
    required : true,
  },
  date: {
    type: String,
    required : true,
  },
});
module.exports = mongoose.model("birth", account);
