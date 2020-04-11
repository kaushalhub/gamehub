var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "admin-dashboard";

router.get("/", (req, res) => {
    res.render(`admin-dashboard`);
});

module.exports = router;