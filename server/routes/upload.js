const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload")
const validateAdmin = require("../middleware/auth")
mongoose.set("debug", true);

router.post('/', [validateAdmin, uploadController.uploadFile]);
router.post('/uploadMultiple', [validateAdmin, uploadController.uploadMultipleFile]);
router.get('/getFiles', [validateAdmin, uploadController.getFiles]);
router.put('/editFile/:id', [validateAdmin, uploadController.editFile]);
router.delete('/deleteFile/:id', [validateAdmin, uploadController.deleteFile]);


module.exports = router;