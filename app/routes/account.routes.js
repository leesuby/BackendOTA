module.exports = app =>{
    const account = require("../controllers/account.controller.js");

    app.post("/account/login",account.login);

    app.post("/account/changepassword",account.changePassword);
}