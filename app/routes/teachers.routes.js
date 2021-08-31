const express=require('express');
const router=express.Router();

const teacher = require("../controllers/teachers.controller.js");

router.post("/viewgrade",teacher.view_grade);

router.post("/editgrade",teacher.edit_grade);

router.post("/viewattendance",teacher.view_attendance);

router.post("/editattendance",teacher.edit_attendance);



// router.post("/tuition-fee",student.view_tuitionfee);

module.exports=router;