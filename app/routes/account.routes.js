module.exports = app =>{
    const account = require("../controllers/account.controller.js");

    app.post("/login",account.login);

    app.post("/changepassword",account.changePassword);
}
