const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const filesSchema = new mongoose.Schema({
  fileName: { type: String, },
  extension: { type: String, },
  creationDate: {
    type: Date,
    default: () => {
      return new Date();
    },
  },

  updateDate: {
    type: Date,
  },

});

const File = mongoose.model("file", filesSchema);

function validateFilePost(user) {
  const schema = Joi.object({
    files: Joi.string().required()
  });
  return schema.validate(user);
}

function validateFileEdit(req) {
  const schema = Joi.object({
    id: Joi.required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    contactNumber: Joi.number(),
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    education: Joi.array(),
    gender: Joi.string(),
    image: Joi.string(),
    countryCode: Joi.string(),
    stateCode: Joi.string(),
    status: Joi.string(),
  });
  return schema.validate(req);
}

function validateFileDelete(req) {
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  return schema.validate(req);
}

function validateFileId(req) {
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  return schema.validate(req);
}

module.exports.File = File;
module.exports.validateFilePost = validateFilePost;
module.exports.validateFileEdit = validateFileEdit;
module.exports.validateFileDelete = validateFileDelete;
module.exports.validateFileId = validateFileId;
