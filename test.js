const courseDB = require("./model/courseDB");

let values = [];
values.push("D%");

courseDB.searchCourses("courseTitle", values, function (error, data) {
  console.log(data);
});
