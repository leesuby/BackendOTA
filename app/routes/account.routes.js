// module.exports = app =>{
//     const account = require("../controllers/account.controller.js");

//     app.post("/account/login",account.login);

//     app.post("/account/changepassword",account.changePassword);
// }

const express=require('express');
const router=express.Router();

const account = require("../controllers/account.controller.js");

router.post("/login",account.login);

router.post("/changepassword",account.changePassword);

module.exports=router;


