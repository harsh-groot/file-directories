const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const { admin } = require("../models/admin");

const validateAdmin = (req, res, next) => {

  let bearerHeader = req.headers['authorization'];
  let token;
  req.authenticated = false;

  if (bearerHeader) {
    let bearer = bearerHeader.split(" ");
    token = bearer[1];
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        console.log(err);
        req.authenticated = false;
        req.decoded = null;
        res.status(400).send({
          status: "ok",
          message: "Invalid token",

        })
      } else {
        req.decoded = decoded;
        req.authenticated = true;
        next();
      }
    });
  }
  else {
    res.status(400).send({
      status: "ok",
      message: "Invalid token",

    })


  }

}



module.exports = validateAdmin

