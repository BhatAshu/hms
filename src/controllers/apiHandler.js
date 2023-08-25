const express = require("express");
const router = express.Router();

const loginAdmin = require("./logadmin");
router.use("/login_admin", loginAdmin);

const loginstaff = require("./addStaff");
router.use("/add_staff", loginstaff);

const adddoctor = require("./addDoctor");
router.use("/add_doctor", adddoctor);

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

const patlogin=require("./patientLogin");
router.use("/patient_login",patlogin);

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

const patform=require("./patientForm");
router.use("/patient_form",patform);

const listuserform=require("./listpatform");
router.use("/listpat_form",listuserform);

const listbloodtestlab=require("./listBloodtest");
router.use("/list_bloodtestlab",listbloodtestlab);

const addbloodtest=require("./addBloodtest");
router.use("/add_bloodtest",addbloodtest);

const bloodtestreport=require("./listbloodtestpdf");
router.use("/bloodtest_report",bloodtestreport);

const addurinetest=require("./addUrineTest");
router.use("/add_urintest",addurinetest);

const listurinetest=require("./listUrineTest");
router.use("/list_urinetest",listurinetest);

const listurinetestpdf=require("./listUrineTestpdf");
router.use("/urinetest_report",listurinetestpdf);

const addsugartest=require("./addSugarLevelTest");
router.use("/add_sugartest",addsugartest);

const listsugartest=require("./listSugartest");
router.use("/list_sugartest",listsugartest);

const listsugartestpdf=require("./listSugartestreport");
router.use("/sugartest_report",listsugartestpdf);

const addBPtest=require("./addBPTest");
router.use("/add_bptest",addBPtest);

const listbptest=require("./listBPtest");
router.use("/list_BPtest",listbptest);

const listbptestpdf=require("./listBPReport");
router.use("/bptest_report",listbptestpdf);

const searchpatient=require("./searchPatient");
router.use("/search_patient",searchpatient);

const upadtepatform=require("./updatePatientForm");
router.use("/update_patform",upadtepatform);

const listgeneral=require("./listGeneral");
router.use("/list_general",listgeneral);

const listpediatrics=require("./listPediatrics");
router.use("/list_pediatrics",listpediatrics);

const listorthopedics=require("./listOrthopedics");
router.use("/list_orthopedics",listorthopedics);

const listdermatology=require("./listDermatology");
router.use("/list_dermatology",listdermatology);

const reporttracking=require("./historytracking");
router.use("/report_tracking",reporttracking);

const addbilling=require("./addBilling");
router.use("/add_billing",addbilling);

const listbilling=require("./listBilling");
router.use("/list_billing",listbilling);


module.exports = router;