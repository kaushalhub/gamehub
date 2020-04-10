var mysql = require('mysql')

const pool = mysql.createPool({

  host: "localhost",
  // host: "us-cdbr-iron-east-04.cleardb.net",
  user: "root",
  // user: "b2de5099507ea7",
  password: "123",
  // password: "13c7e046",
  database: "pubgstartup",
  // database: "heroku_2c7966fc0d4b1ba",
  port: "3306",
  connectionLimit: 100,
  multipleStatements: true
});

module.exports = pool;
