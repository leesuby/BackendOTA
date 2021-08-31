const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database

var connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  }); // the old one cannot be reused.
  
  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }
    console.log('connect database successfully!!',);                                  // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {
      if(err.fatal)
        handleDisconnect();                        // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}


handleDisconnect()

const Teacher = function(teacher){
    this.ID= teacher.ID;
    //this.password=account.password;
}

Teacher.viewgrade = (req, result) => {
    connection.query(`SELECT stu.Name as 'StudentName',15phut_1,15phut_2,15phut_3,15phut_4,45phut_1,45phut_2,giuaki,cuoiki
                FROM Subject s join Grade g on s.id=g.Subject_ID join Student stu on g.Student_ID=stu.ID
                WHERE  s.Name = "${req.body.subjectName}" and g.Class= "${req.body.class}" `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found : ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
};

Teacher.editgrade = (req, result) => {
    connection.query(`UPDATE Subject s join Grade g on s.id=g.Subject_ID
                    SET 15phut_1="${req.body.test1}",15phut_2="${req.body.test2}",15phut_3="${req.body.test3}",15phut_4="${req.body.test4}",45phut_1="${req.body.test5}",45phut_2="${req.body.test6}",giuaki="${req.body.test7}",cuoiki="${req.body.test8}"
                    WHERE  s.Name = "${req.body.subjectName}" and g.Student_ID= "${req.body.StudentID}" `
               , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found : ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Successfully" }, null);
    });
};

Teacher.viewattendance = (req, result) => {
    connection.query(`SELECT a.ID_Student as 'StuId',stu.Name as 'StuName',Week1,Week2,Week3,Week4,Week5,Week6,Week7,Week8,Week9,Week10
                FROM Attendance a join Subject s on a.Subject=s.id join Student stu on stu.id=a.ID_Student
                WHERE s.Name = "${req.body.subjectName}" and a.Class="${req.body.class}" `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found Attendance: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

Teacher.editattendance = (req, result) => {
    connection.query(`UPDATE Attendance a join Subject s on s.id=a.Subject
                    SET Week1="${req.body.Week1}",Week2="${req.body.Week2}",Week3="${req.body.Week3}",Week4="${req.body.Week4}",Week5="${req.body.Week5}",Week6="${req.body.Week6}",Week7="${req.body.Week7}",Week8="${req.body.Week8}",Week9="${req.body.Week9}",Week10="${req.body.Week10}"
                    WHERE  s.Name = "${req.body.subjectName}" and a.ID_Student= "${req.body.StudentID}" `
               , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found : ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Successfully" }, null);
    });
};

module.exports = Teacher;