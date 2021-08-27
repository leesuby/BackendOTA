var router = require('express').Router();
module.exports = app =>{
    const account = require("../controllers/account.controller.js");

    router.post("/login",account.login);

    router.post("/changepassword",account.changePassword);
}
module.exports = router