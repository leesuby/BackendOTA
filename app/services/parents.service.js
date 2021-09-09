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

const Parent  = function(parent){
    // this.Sender= parent.Sender;
    // //this.password=account.password;
    // this.Receiver = parent.Receiver;
    // this.Topic=parent.Topic;
    // this.Content=parent.Content;
    this.ID= parent.ID;
}



Parent.attendance = (paID, result) => {
    connection.query(`SELECT a.Subject as 'SubId',s.Name as 'SubName',Week1,Week2,Week3,Week4,Week5,Week6,Week7,Week8,Week9,Week10
                FROM Attendance a join Subject s on a.Subject=s.id join Parent p on p.id_student=a.ID_Student
                WHERE p.id = "${paID}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found with parentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };



Parent.timetable = (paID, result) => {
    connection.query(`SELECT s.Class,sub.Name as 'Subject',tb.Time,Day_Week,a.Teacher_ID,t.Name as 'TeacherName',c.STT
                FROM Assignment a join Timetable tb on tb.Assignment_ID=a.id join Teacher t on t.id=a.Teacher_ID,Student s,Subject sub,Parent p,ClassTime c
                WHERE sub.id=a.Subject_ID and p.id = "${paID}" and s.Class=a.Class and p.id_student=s.id and c.Time=tb.Time`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found with parentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

Parent.grade = (paID, result) => {
    connection.query(`SELECT s.id as 'SubId',s.Name as 'SubName',15phut_1,15phut_2,15phut_3,15phut_4,45phut_1,45phut_2,giuaki,cuoiki
                FROM Grade g join Subject s on s.id=g.Subject_ID join Parent p on p.id_student=g.Student_ID
                WHERE  p.id = "${paID}" `, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found with parentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
};

Parent.tuitionfee = (paID, result) => {
    connection.query(`SELECT Sender,Topic,Content
                FROM Mail m, Student s join Parent p on p.id_student=s.id and p.id="${paID}"
                WHERE m.Topic="Tuition fee" and (m.Receiver = "${paID}" or m.Receiver ="ALL" or (m.Receiver =s.Class))`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found with parentId: ", res);
        result(null, res);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

Parent.create_letter = (letter, result) => {
    connection.query("INSERT INTO Mail SET ?",letter, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      
        console.log("created letter: ",letter);
        result(null, letter);
        
      
  
      // not found Customer with the id
      //result({ kind: "Not_found" }, null);
    });
  };

Parent.findById = (teacherId, result) => {
    connection.query(`SELECT * FROM Teacher WHERE id = "${teacherId}"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found username: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
  };

module.exports = Parent;