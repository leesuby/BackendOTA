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
                FROM Subject s join Grade g on s.id=g.Subject_ID join Student stu on g.stuID=stu.ID
                WHERE  s.Name = "${req.body.subjectName}" and g.classID= "${req.body.class}" `, (err, res) => {
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



module.exports = Teacher;