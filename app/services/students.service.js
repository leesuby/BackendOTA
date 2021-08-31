const sql = require("./db.js");

const Student = function(student){
    this.ID= student.ID;
    //this.password=account.password;
}

Student.attendance = (stuId, result) => {
    sql.query(`SELECT a.Subject as SubId,s.Name as SubName,Week1,Week2,Week3,Week4,Week5,Week6,Week7,Week8,Week9,Week10
                FROM Attendance a join Subject s on a.Subject=s.id WHERE a.ID_Student = "${stuId}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found studentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

Student.notification = (stuId, result) => {
    sql.query(`SELECT Sender,Topic,Content
                FROM Mail m, Student s
                WHERE m.Receiver = "${stuId}" or m.Receiver ="ALL" or m.Receiver =s.Class `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found studentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

Student.timetable = (stuId, result) => {
    sql.query(`SELECT 
                FROM Attendance a join Subject s on a.Subject=s.id WHERE a.ID_Student = "${stuId}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found studentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };
  
module.exports = Student;