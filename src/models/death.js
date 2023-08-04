const {default:mongoose} = require("mongoose");
const account = mongoose.Schema({
  name: {
    type: String,
    required : true,
  },
  cause: {
    type: String,
    required:true,
  },
  date: {
    type: String,
    required : true,
  },
});
module.exports = mongoose.model("death", account);
