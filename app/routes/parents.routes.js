const express=require('express');
const router=express.Router();

const parent = require("../controllers/parents.controller.js");

router.post("/attendance",parent.view_attendance);


router.post("/timetable",parent.class_schedule);

router.post("/grade",parent.view_grade);

router.post("/tuition-fee",parent.view_tuitionfee);

router.post("/absent-letter",parent.absent_letter);

module.exports=router;