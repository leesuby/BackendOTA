const express=require('express');
const router=express.Router();

const teacher = require("../controllers/teachers.controller.js");

router.post("/viewgrade",teacher.view_grade);

router.post("/editgrade",teacher.edit_grade);

// router.post("/class-notification",student.view_notification);

// router.post("/timetable",student.class_schedule);



// router.post("/tuition-fee",student.view_tuitionfee);

module.exports=router;