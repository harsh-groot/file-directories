
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const { File, } = require("../models/files")

const uploadFile = async (req, res) => {

  if (!req.files) return res.status(400).send("no files were uploaded..")

  let file = req.files.files


  if (req.files) {
    const random = Math.floor(Math.random() * 100);
    const fileName = file?.name?.split(".")[0] + random
    const ext = file?.name?.split(".")?.pop();

    const imageName = `${fileName}.${ext}`;
    const imagePath = path.join(__dirname,
      "..",
      "files/uploaded/"
    );

    file.mv(imagePath + imageName, function (err) {
      if (err) {
        return res.status(500).send(err)
      }
    })

    let data = {}
    data["fileName"] = imageName;
    data["extension"] = ext;

    const newFile = new File(data);
    await newFile.save();

    if (newFile) {
      res.status(200).send({
        status: "ok",
        message: "file uploaded successfully"
      })
    }
    else {
      res.status(500).send({
        status: "failed",
        message: "file not uploaded"
      })
    }


  }

}

const uploadMultipleFile = async (req, res) => {

  if (!req.files) return res.status(400).send("no files were uploaded..")

  let file = req.files.files

  try {
    if (file?.length > 0) {
      file.map(async (data) => {

        if (data) {
          const random = Math.floor(Math.random() * 100);
          const fileName = data?.name?.split(".")[0] + random
          const ext = data?.name?.split(".")?.pop();
          const imageName = `${fileName}.${ext}`;
          const imagePath = path.join(__dirname,
            "..",
            "files/uploaded/"
          );

          data.mv(imagePath + imageName, function (err) {
            if (err) {
              return res.status(500).send(err)
            }
          })

          let data1 = {}
          data1["fileName"] = imageName;
          data1["extension"] = ext;

          const newFile = new File(data1);
          await newFile.save();


        }
      })
    }
    return res
      .status(200)
      .json({ message: "files uploaded successfully" });
  }
  catch {
    return res
      .status(400)
      .json({ message: "internal err" });
  }
}

const getFiles = async (req, res) => {

  try {
    const files = await File.find()
    res.status(200).send({
      status: "ok",
      message: "file fetched successfully",
      data: files
    })
  } catch (error) {
    return res.send({
      status: 500,
      message: error.message,
    });
  }

}

const editFile = async (req, res) => {

  const filee = File.findById(req.params.id)
  if (!filee) res.status(400).send({
    message: "Invalid id",
  })

  if (!req.files) return res.status(400).send("no files were uploaded..")

  let file = req.files.files


  if (req.files) {
    const random = Math.floor(Math.random() * 100);
    const fileName = file?.name?.split(".")[0] + random
    const ext = file?.name?.split(".")?.pop();

    const imageName = `${fileName}.${ext}`;
    const imagePath = path.join(__dirname,
      "..",
      "files/uploaded/"
    );

    file.mv(imagePath + imageName, function (err) {
      if (err) {
        return res.status(500).send(err)
      }
    })

    let data = {}
    data["fileName"] = imageName;
    data["extension"] = ext;
    data["updateDate"] = new Date();

    const updateFile = await File.findByIdAndUpdate(req.params.id, data);

    if (updateFile) {
      res.status(200).send({
        status: "ok",
        message: "file updated successfully"
      })
    }
    else {
      res.status(500).send({
        status: "failed",
        message: "file not uploaded"
      })
    }


  }




}

const deleteFile = async (req, res) => {

  try {

    const validId = await File.findById(req.params.id)
    if (!validId)
      return res.status(400).send({
        statusCode: 400,
        message: "Failure",
        data: { message: "Invalid id" },
      });

    let _id = req.params.id
    await File.findByIdAndDelete(_id);
    return res.send({
      status: 200,
      message: "File deleted successfully",
    });

  }
  catch (error) {
    return res.send({
      status: 500,
      message: error.message,
    });
  }

}

module.exports = { uploadFile, getFiles, editFile, deleteFile, uploadMultipleFile };