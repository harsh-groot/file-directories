const express = require("express");
const upload = require("../routes/upload")
const admin = require("../routes/admin")
const fileUpload = require('express-fileupload');

module.exports = function (app) {
  app.use(express.json());
  app.use(fileUpload());
  app.use("/api/upload", upload);
  app.use("/api/admin", admin);
  app.use("/image", express.static("./images/uploaded"));
};
