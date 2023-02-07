const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin")
mongoose.set("debug", true);

router.post('/login', adminController.login)


module.exports = router;