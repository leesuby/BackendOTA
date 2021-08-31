const express=require('express');
const router=express.Router();

const student = require("../controllers/students.controller.js");

router.post("/attendance",student.view_attendance);

router.post("/class-notification",student.view_notification);

router.post("/timetable",student.class_schedule);

router.post("/grade",student.view_grade);

router.post("/tuition-fee",student.view_tuitionfee);

module.exports=router;