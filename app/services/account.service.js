const sql = require("./db.js");

const Account = function(account){
    this.ID= account.ID;
    this.password=account.password;
}

Account.findById = (accountId, result) => {
    sql.query(`SELECT * FROM account WHERE id = ${accountId}`, (err, res) => {
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
    sql.query("SELECT * FROM account WHERE id = ?,Password=?",[account.ID,account.password], (err, res) => {
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
    sql.query("UPDATE account SET Password = ? WHERE id = ?,password=?",
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
