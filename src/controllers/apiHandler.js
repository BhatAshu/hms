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


module.exports = router;