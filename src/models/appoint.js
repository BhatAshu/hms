const {default:mongoose} = require("mongoose");
const accounts = mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", // Reference to the "Patient" model
        required: true,
      },
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", // Reference to the "Doctor" model
        required: true,
      },
      appointmentDate: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
      },
      // Other appointment-related fields
    });
    
module.exports = mongoose.model("appoint", accounts);
