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
  pool.execute(sql, function (err, results) {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

function addCourse(courseData,callback) {
  const sql = "INSERT INTO courses(courseNo,courseTitle,creditHrs,semester) VALUES(?,?,?,?)";
  pool.execute(sql,courseData,function (err, results) {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

function deleteCourse(courseData, callback) {
  const sql = "DELETE FROM courses WHERE courseID = ?";
  pool.execute(sql, courseData, function (err, results) {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

function searchCourses(field, values, callback) {
  const sql = "SELECT * FROM courses where " + field + " like ?";
  pool.execute(sql, values, function (err, results) {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

module.exports = {
  getCourses,
  addCourse,
  deleteCourse,
  searchCourses,
};
