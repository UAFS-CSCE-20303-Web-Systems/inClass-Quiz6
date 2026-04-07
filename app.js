const express = require("express");
const courseDB = require("./model/courseDB");

const app = express();

//*** Middleware */
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/courses/add/",function(req,res){
  res.render("addCourse");
});


app.post("/courses/add/", addController);


app.listen(3000, function () {
  console.log("Listening on port 3000..");
});


function addController(req, res) {
  // 1. Get the Name Value Pairs from the Request
  let courseData=[];
  courseData.push(req.body.courseNo);
  courseData.push(req.body.courseTitle);
  courseData.push(req.body.creditHrs);
  courseData.push(req.body.semester);
  console.log(courseData);

  // 2. Interact with the Model
  courseDB.addCourse(courseData,function(err,result,fields){
    console.log(err);
    console.log(result);
    console.log(fields);
    
    // 3. Select the Next View
    res.redirect("/courses/add/");
  });
}
