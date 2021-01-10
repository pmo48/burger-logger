// connection file for mysql

var mysql = require("mysql");

// if it's run on heroku using JAWS, use that connection otherwise use local

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : 3306,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  });
}

// logs errors/success for connection

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exports connection to use in ORM

module.exports = connection;