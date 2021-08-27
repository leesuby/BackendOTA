const Account = require("../services/account.service.js");


exports.login=(req,res)=>{
    if (!req.body) {
        res.status(400).json({
          message: "Content can not be empty!"
        });
    }
    console.log(req.body.ID);
    console.log("asdwaweaea");
    console.log("asdawdaw ",req.body);
    console.log("asdawea",req.body.ID);

    const account=new Account({
        ID: req.body.ID,
        password: req.body.password
    });
    
    Account.findById(account.ID,(err,data)=>{
        
        if (err) {
            if (err.kind === "Not_found") {
              res.status(404).json({
                message:`Not found Account with id ${account.ID}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving Account with id " + account.ID
              });
            }
          } else {
                Account.checkPw(account,(err, data) => {
                    if (err) {
                      if (err.kind === "Not_found") {
                        res.status(405).json({
                          message: "Your password is incorrect."
                        });
                      } else {
                        res.status(501).json({
                          message: "Error retrieving Account. "
                        });
                      }
                    } else res.status(200).json({
                      message: "Login successfully",
                      id_password : data

                    });//send data or mess tb login successfullly
                });
          }
    });
};

exports.changePassword = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).json({
        message: "Content can not be empty!"
      });
    }
  
    
    
    const account=new Account({
        ID : req.body.ID,
        password : req.body.oldpw

    });

    Customer.updatePw(
      req.body.newpw,
      account,
      (err, data) => {
        if (err) {
          if (err.kind === "Not_found") {
            res.status(404).json({
              message: "Your old password is incorrect."
            });
          } else {
            res.status(500).json({
              message: "Error changing password with id " + account.ID
            });
          }
        } else res.status(200).json(data);//send data or mess tb change password successfullly
      }
    );
  };