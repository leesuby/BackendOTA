var router = require('express').Router();
module.exports = app =>{
    const account = require("../controllers/account.controller.js");

    router.get("/login",account.login);

    router.get("/changepassword",account.changePassword);
}
module.exports = router