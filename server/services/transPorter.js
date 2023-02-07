const nodemailer = require("nodemailer");
require('dotenv').config();

  
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
  
    
    
  module.exports.transPorter = mailTransporter;