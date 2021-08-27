var router = require('express').Router();
module.exports = app =>{
    const account = require("../controllers/account.controller.js");

<<<<<<< HEAD
    app.post("/account/login",account.login);

    app.post("/account/changepassword",account.changePassword);
}
=======
    router.get("/login",account.login);

    router.get("/changepassword",account.changePassword);
}
module.exports = router
>>>>>>> edf3a72f9d1dd8eb14d3f7e8c20161569afda290
