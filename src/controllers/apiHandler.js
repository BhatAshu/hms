const express = require("express");
const router = express.Router();

const loginAdmin = require("./logadmin");
router.use("/login_admin", loginAdmin);

const loginstaff = require("./addStaff");
router.use("/add_staff", loginstaff);

const addDoctor = require("./listUser");
router.use("/viewuser", addDoctor);

const removeUser = require("./deleteUser");
router.use("/delete_user",removeUser);

const updateuser = require("./updateUser");
router.use("/update_user",updateuser);

const profile = require("./profile");
router.use("/profile", profile);

const patient = require("./addPatient");
router.use("/add_patient", patient);

const listpatient = require("./listPatients");
router.use("/list_patient", listpatient);

const deletepatient = require("./deletePatient");
router.use("/delete_patient", deletepatient);

const updatepatient = require("./updatePatient");
router.use("/update_patient", updatepatient);

const resetpass = require("./resetPassword");
router.use("/reset_password", resetpass);

const listdoctor = require("./listDoctor");
router.use("/list_doctor", listdoctor);

const addblood = require("./addbloodDonor");
router.use("/add_blood", addblood);

const listblood = require("./listBloodDonor");
router.use("/list_blood", listblood);

const updateblood = require("./updatebloodDonor");
router.use("/update_blood", updateblood);

const deleteblood = require("./deleteBloodDonor");
router.use("/delete_blood", deleteblood);

const adddispatch = require("./addDispatchBlood");
router.use("/add_dispatch", adddispatch);

const profilepatient = require("./profilePatient");
router.use("/profile_patient", profilepatient);

const signup=require('./signUp');
router.use("/sign_up",signup)

const loginuser=require("./loginUser");
router.use("/log_user",loginuser);

const senduserdetails=require("./patientlaboratory");
router.use("/send_lab",senduserdetails);

const getuserdetails=require("./listPatientLab");
router.use("/list_lab",getuserdetails);

const dispatch=require("./addDispatchBlood");
router.use("/dispatch_blood",dispatch);

const listdispatch=require("./listDispatchblood");
router.use("/list_dispatch",listdispatch);

const updatedispatch=require("./updateDispatch");
router.use("/update_dispatch",updatedispatch);

const deletedispatch=require("./deleteDispatch");
router.use("/delete_dispatch",deletedispatch);

const bloodbank=require("./bloodBank");
router.use("/blood_bank",bloodbank);

const reportgenerate=require("./report");
router.use("/report_generate",reportgenerate);


module.exports = router;