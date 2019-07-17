
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "Kblsrfrs.99",
  database: "sql_ex"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected ...");

  var sql = "INSERT INTO users (username, emailaddress) VALUES ('$username', '$emailddress')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

