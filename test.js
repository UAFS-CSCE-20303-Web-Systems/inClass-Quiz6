const courseDB = require("./model/courseDB");

let value=["CS101","Test Course","3","Fall 2026"];

courseDB.addCourse(value,function(err,result,fields){
  if(result.affectedRows==1){
    console.log("Insert Successful");
  }
  console.log(result);
});

courseDB.getCourses(function (err,result,fields) {
  console.log(result);
});

courseDB.deleteCourse([2],function(err,result,fields){
  console.log(result);
});
