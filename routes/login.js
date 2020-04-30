var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
var config = require("../config/config");
let table = "login";
// const client = require("twilio")(config.accountSID, config.authToken)

router.get("/", (req, res) => {
    res.render(`login`);
});

router.get('/login', (req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: req.query.phonenumber,
            channel: req.query.channel
        })
        .then((data) => {
            res.status(200).send(data)
        })
})

module.exports = router;