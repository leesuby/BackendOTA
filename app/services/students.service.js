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

const Student = function(student){
    this.ID= student.ID;
    //this.password=account.password;
}

Student.attendance = (stuId, result) => {
    connection.query(`SELECT a.Subject as 'SubId',s.Name as 'SubName',Week1,Week2,Week3,Week4,Week5,Week6,Week7,Week8,Week9,Week10
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
    connection.query(`SELECT Sender,Topic,Content
                FROM Mail m, Student s
                WHERE  s.id= "${stuId}" and (m.Receiver = "${stuId}" or m.Receiver ="ALL" or (m.Receiver =s.Class))`, (err, res) => {
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
    connection.query(`SELECT s.Class,Time,Day_Week,a.Teacher_ID,t.Name as 'TeacherName'
                FROM Assignment a join Timetable tb on tb.Assignment_ID=a.id join Teacher t on t.id=a.Teacher_ID,Student s,Subject sub
                WHERE sub.id=a.Subject_ID and s.id = "${stuId}" and s.Class=a.Class`, (err, res) => {
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

Student.grade = (stuId, result) => {
    connection.query(`SELECT s.id as 'SubId',s.Name as 'SubName',15phut_1,15phut_2,15phut_3,15phut_4,45phut_1,45phut_2,giuaki,cuoiki
                FROM Subject s join Grade g on s.id=g.Subject_ID
                WHERE  g.Student_ID = "${stuId}" `, (err, res) => {
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

Student.tuitionfee = (stuId, result) => {
    connection.query(`SELECT Sender,Topic,Content
                FROM Mail m, Student s
                WHERE m.Topic="Tuition fee" and (m.Receiver = "${stuId}" or m.Receiver ="ALL" or (m.Receiver =s.Class and s.id= "${stuId}"))`, (err, res) => {
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