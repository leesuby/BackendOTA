const Parent = require("../services/parents.service.js");


exports.view_attendance=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const Parent=new Parent({
    //     ID: req.body.paID,
        
    // });
    
    Parent.attendance(req.body.paID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found Attendace for student with parent id ${req.body.paID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving Attendance with id " + req.body.paID
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



exports.class_schedule=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    // const Parent=new Parent({
    //     ID: req.body.paID,
        
    // });
    
    Parent.timetable(req.body.paID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found class schedule for student with parent id ${req.body.paID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving timetable for student with parent id " + req.body.paID
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
    

    // const Parent=new Parent({
    //     ID: req.body.paID,
        
    // });
    
    Parent.grade(req.body.paID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found grade for student with parent id ${req.body.paID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving grade for student with parent id " + req.body.paID
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
    

    // const Parent=new Parent({
    //     ID: req.body.paID,
        
    // });
    
    Parent.tuitionfee(req.body.paID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Nothing in the tuition fee notification section with parent id ${req.body.paID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving tuition fee with parent id " + req.body.paID
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

exports.absent_letter=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    
    console.log(req.body);
    

    const letter= {
        Sender :    req.body.paID,
        Receiver:    req.body.teacherID,
        Topic:    req.body.topic,
        Content:    req.body.content
    };
    
    Parent.findById(req.body.teacherID,(err,data)=>{
        
      if (err) {
          if (err.kind === "Not_found") {
            res.status(404).json({
              message:`Not found Receiver with id ${req.body.teacherID}.`
            });
          } else {
            res.status(500).json({
              message: "Error retrieving Receiver with id " + req.body.teacherID
            });
          }
        } else {
          Parent.create_letter(letter,(err,data)=>{
        
            if (err) {
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while absenting the letter."
                  });
              } else {
                res.status(200).json({
                    message: "Absent the letter successfully",
                    mail : data
    
                  });
              }
        });
        }
  });

    
};


