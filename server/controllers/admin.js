
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const { admin, validateLoginInput } = require("../models/admin")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {


    const email = req.body.email;
    const password = req.body.password;
    const Admin = await admin.findOne({ email })

    // Check password

    if (Admin.password == password) {
        // Create JWT Payload
        const payload = {
            id: Admin._id,
            name: Admin.firstName
        };

        // Sign token
        jwt.sign(
            payload,
            "jwtPrivateKey",
            {
                expiresIn: '1d'
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: token,
                    admin: Admin
                });
            }
        );
    } else {
        return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
    }




}


module.exports = { login };