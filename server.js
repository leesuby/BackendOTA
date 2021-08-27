const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoutes=require("./app/routes/login.routes.js");
const studentsRoutes=require("./app/routes/students.routes.js");
const parentsRoutes=require("./app/routes/parents.routes.js");
const teachersRoutes=require("./app/routes/teachers.routes.js");
const adminRoutes=require("./app/routes/admin.routes.js");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OTA application." });
});

app.use('/login',loginRoutes);
app.use('/students',studentsRoutes);
app.use('/parents',parentsRoutes);
app.use('/teachers',teachersRoutes);
app.use('/admin',adminRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});