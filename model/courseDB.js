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



module.exports = {
  getCourses
};
