const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const loginSchema = new mongoose.Schema({
  firstName: { type: String, },
  lastName: { type: String, },
  email: { type: String, },
  password: { type: String, },
  creationDate: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

const admin = mongoose.model("admin", loginSchema);



function validateLoginInput(user) {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });
  return schema.validate(user);
}


module.exports.admin = admin;
module.exports.validateLoginInput = validateLoginInput;

