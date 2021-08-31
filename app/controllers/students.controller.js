const Student = require("../services/students.service.js");


exports.view_attendance=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Student.attendance(req.body.stuID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found Attendace with id ${req.body.stuID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving Attendance with id " + req.body.stuID
              });
            }
          } else {
            res.status(200).json({
                message: "Query successfully",
                attendance : data

              });
          }
    });
};


exports.view_notification=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Student.notification(req.body.stuID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Nothing in the class notification section with id ${req.body.stuID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving notification with id " + req.body.stuID
              });
            }
          } else {
            res.status(200).json({
                message: "Query successfully",
                notification : data

              });
          }
    });
};

exports.class_schedule=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Student.timetable(req.body.stuID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found class schedule with id ${req.body.stuID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving timetable with id " + req.body.stuID
              });
            }
          } else {
            res.status(200).json({
                message: "Query successfully",
                timetable : data

              });
          }
    });
};

exports.view_grade=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Student.grade(req.body.stuID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found grade with id ${req.body.stuID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade with id " + req.body.stuID
              });
            }
          } else {
            res.status(200).json({
                message: "Query successfully",
                grade : data

              });
          }
    });
};

exports.view_tuitionfee=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Student.tuitionfee(req.body.stuID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Nothing in the tuition fee notification section with id ${req.body.stuID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving Account with id " + req.body.stuID
              });
            }
          } else {
            res.status(200).json({
                message: "Query successfully",
                fee : data

              });
          }
    });
};

