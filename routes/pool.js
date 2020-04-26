var mysql = require('mysql')

const pool = mysql.createPool({

  // host: "localhost",
  host: "us-cdbr-iron-east-01.cleardb.net",
  // user: "root",
  user: "b426c723a16136",
  // password: "123",
  password: "975ee915",
  // database: "pubgstartup",
  database: "heroku_684ab84efad05a0",
  port: "3306",
  connectionLimit: 100,
  multipleStatements: true

  // paykun password: eFapbwp*Mx7mLf9
});

module.exports = pool;
