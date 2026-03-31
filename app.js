const express = require("express");
const courseDB = require("./model/courseDB");

const app = express();

//*** Middleware */
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/courses", function (req, res) {
  courseDB.getCourses(function (error, courses) {
    res.render("listCourses", { courses: courses });
  });
});

app.get("/courses/add", function (req, res) {
  res.render("addCourse", {});
});

app.post("/courses/add", function (req, res) {
  const courseData = [];
  courseData.push(req.body.courseNo);
  courseData.push(req.body.courseTitle);
  courseData.push(Number(req.body.creditHrs));
  courseData.push(req.body.semester);
  courseDB.addCourse(courseData,function(err,results){
    console.log(err);
    console.log(results);
    res.redirect("/courses");
  });
});

app.get("/courses/delete/:key",function (req,res){
  const courseData = [];
  courseData.push(req.params.key);
  courseDB.deleteCourse(courseData, function (err, results) {
    console.log(err);
    console.log(results);
    res.redirect("/courses");
  });
});

app.get("/courses/search", function (req, res) {
  let field = req.query.field;
  let values = [];
  values.push(req.query.svalue + "%");
  courseDB.searchCourses(req.query.field, values, function (error, courses) {
    res.render("listCourses", { courses: courses });
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000..");
});
