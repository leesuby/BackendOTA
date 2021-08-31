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