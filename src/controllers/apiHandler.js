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

const addblood = require("./addbloodDonor");
router.use("/add_blood", addblood);

const viewblood = require("./listBloodDonor");
router.use("/view_blood", viewblood);

const updateblood = require("./updatebloodDonor");
router.use("/update_blood", updateblood);

const deleteblood = require("./deleteBloodDonor");
router.use("/delete_blood", deleteblood);

const dispatchblood = require("./addDispatchBlood");
router.use("/add_disptach", dispatchblood);

const listdispatchblood = require("./listDispatchblood");
router.use("/list_dispatch", listdispatchblood);

const updatedispatchblood = require("./updateDispatch");
router.use("/update_dispatch", updatedispatchblood);

const deletedispatch = require("./deleteDispatch");
router.use("/delete_dispatch", deletedispatch);

const bloodbank = require("./bloodBank");
router.use("/blood_bank", bloodbank);

const addbirth = require("./addBirth");
router.use("/add_birth", addbirth);

const listbirth = require("./listBirth");
router.use("/list_birth", listbirth);

const updatebirth = require("./updateBirth");
router.use("/update_birth", updatebirth);

const deletebirth = require("./deleteBirth");
router.use("/delete_birth", deletebirth);

const adddeath = require("./addDeath");
router.use("/add_death", adddeath);

const listdeath = require("./listDeath");
router.use("/list_death", listdeath);

const updatedeath = require("./updateDeath");
router.use("/update_death", updatedeath);

const deletedeath = require("./deleteDeath");
router.use("/delete_death", deletedeath);

const resetpass = require("./resetPassword");
router.use("/reset_password", resetpass);

const addintern = require("./addIntern");
router.use("/add_intern", addintern);

const listintern = require("./listIntern");
router.use("/list_intern", listintern);

const updateintern = require("./updateIntern");
router.use("/update_intern", updateintern);

const deleteintern = require("./deleteIntern");
router.use("/delete_intern", deleteintern);


const listdoctor = require("./listDoctor");
router.use("/list_doctor", listdoctor);


module.exports = router;