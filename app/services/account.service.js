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


const Account = function(account){
    this.ID= account.ID;
    this.password=account.password;
}

Account.findById = (accountId, result) => {
    connection.query(`SELECT * FROM Account WHERE id = "${accountId}"`, (err, res) => {
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

Account.checkPw = (account, result) => {
    connection.query("SELECT * FROM Account WHERE id = ? and Password=?",[account.ID,account.password], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found account: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "Not_found" }, null);
    });
};

Account.updatePw = (newPw,account, result) => {
    connection.query("UPDATE account SET Password = ? WHERE id = ? and password=?",
        [newPw,account.ID,account.password],(err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "Not_found" }, null);
            return;
          }
    
          console.log("Updated customer: ", { id: account.ID, ...account });
          result(null, { id: account.ID, ...account });
        }
      );
};

module.exports =Account;
