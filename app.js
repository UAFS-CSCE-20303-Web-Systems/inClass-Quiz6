const express = require("express");
const courseDB = require("./model/courseDB");

const app = express();

//*** Middleware */
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");




app.listen(3000, function () {
  console.log("Listening on port 3000..");
});
