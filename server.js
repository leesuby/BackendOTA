const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//const accountRoutes=require("./app/routes/account.routes.js");
// const studentsRoutes=require("./app/routes/students.routes.js");
// const parentsRoutes=require("./app/routes/parents.routes.js");
// const teachersRoutes=require("./app/routes/teachers.routes.js");
// const adminRoutes=require("./app/routes/admin.routes.js");


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  console.log("Adsawea")
  console.log(req.body)
  res.json({ message: "Welcome to OTA application." });
});


//app.use('/account',accountRoutes);

// app.use(app.router);
// accountRoutes.initialize(app);
// studentsRoutes.initialize(app);
// parentsRoutes.initialize(app);
// teachersRoutes.initialize(app);
// adminRoutes.initialize(app)

//app.use('/account',accountRoutes);

// app.use('/students',studentsRoutes);
// app.use('/parents',parentsRoutes);
// app.use('/teachers',teachersRoutes);
// app.use('/admin',adminRoutes);


require("./app/routes/account.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
