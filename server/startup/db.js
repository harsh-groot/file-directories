const mongoose = require("mongoose");
const config = require("config");
require('dotenv').config();

  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useFindAndModify: false,useCreateIndex:true })
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

  module.exports = db;

