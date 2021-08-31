const Teacher = require("../services/teachers.service.js");

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
    
    Teacher.viewgrade(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found grade with id ${req.body.id} class ${req.body.class} SubjectName ${req.body.subjectName}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade "
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

exports.edit_grade=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Teacher.editgrade(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Successfully") {
              res.status(200).json({
                message: "Edit successfully"
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade "
              });
            }
          } else {
            res.status(404).json({
                message: "Fail",
    

              });
          }
    });
};


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
    
    Teacher.viewattendance(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found attendance with id ${req.body.id} class ${req.body.class} SubjectName ${req.body.subjectName}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade "
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


exports.edit_attendance=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Teacher.editattendance(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Successfully") {
              res.status(200).json({
                message: "Edit successfully"
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade "
              });
            }
          } else {
            res.status(404).json({
                message: "Fail",
    

              });
          }
    });
};
