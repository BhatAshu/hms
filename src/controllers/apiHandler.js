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

const adddoctor = require("./addDoctor");
router.use("/add_doctor", adddoctor);

const updatedoctor = require("./updateDoctor");
router.use("/update_doctor", updatedoctor);

const deletedoctor = require("./deleteDoctor");
router.use("/delete_doctor", deletedoctor);

const addnurse = require("./addNurse");
router.use("/add_nurse", addnurse);

const listnurse = require("./listNurse");
router.use("/list_nurse", listnurse);

const updatenurse = require("./updateNurse");
router.use("/update_nurse", updatenurse);

const deletenurse = require("./deleteNurse");
router.use("/delete_nurse", deletenurse);

const addreceptionist = require("./addReceptionist");
router.use("/add_receptionist", addreceptionist);

const listreceptionist = require("./listReceptionist");
router.use("/list_receptionist", listreceptionist);

const updaterecept = require("./updateReceptionist");
router.use("/update_recept", updaterecept);

const deleterecept = require("./deleteRecept");
router.use("/delete_recept", deleterecept);

const logdoctor = require("./loginDoctor");
router.use("/login_doctor", logdoctor);


module.exports = router;