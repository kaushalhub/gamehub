var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "tournament-detail";

router.get("/", (req, res) => {
  if (req.session.id) {

    var query = `select name,number from signup where id = "${req.session.id}"; `
    var query1 = `select * from tournament`
    pool.query(query + query1, (err, result) => {
      if (err) throw err;
      else res.render(`tournament-detail`, { login: true , result : result});
   
    })
  }
  else {
    res.render('admin-login', { login: false });
  }
});

module.exports = router;