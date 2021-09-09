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
              if(err.kind==="Not_found")
              res.status(404).json({
                message: "FAIL!!! Please check again information of student you want to edit"
              });
            }
          } else {
            res.status(500).json({
                message: "Error",
    

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
                message: "Error retrieving database "
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
          if(err.kind==="Not_found")
          res.status(404).json({
            message: "FAIL!!! Please check again information of student you want to edit"
          });
        }
      } else {
        res.status(500).json({
            message: "Error",


          });
      }
});
};


exports.timetable=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Teacher.viewtimetable(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found timetable with id ${req.body.id}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving database "
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


exports.notification=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const student=new Student({
    //     ID: req.body.stuID,
        
    // });
    
    Teacher.viewNotification(req,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found notification with id ${req.body.id}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving database "
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

