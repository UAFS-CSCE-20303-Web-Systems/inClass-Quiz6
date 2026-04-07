const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "inClassuser",
  password: "inClasspass",
  database: "inClass",
  connectionLimit: 5,
});

function getCourses(callback) {
  const sql = "SELECT * FROM courses";
  pool.execute(sql, function (err, result, fields) {
    callback(err, result, fields);
  });
}

function addCourse(values,callback) {
  const sql = "INSERT INTO courses (courseNo, courseTitle, creditHrs, semester) VALUES (?,?, ?, ?)";
  pool.execute(sql,values, function (err, result, fields) {
    callback(err, result, fields);
  });
}

function deleteCourse(values,callback){
  const sql = "DELETE FROM courses WHERE courseID = ?";
  pool.execute(sql,values,function(err,result,fields){
    callback(err,result,fields);
  });
}



module.exports = {
  getCourses, addCourse, deleteCourse
};
