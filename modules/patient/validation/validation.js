const Joi = require('joi');

const patientSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().optional(),
  countryCode: Joi.string().optional(),
  password: Joi.string().required(),
  patientPhoto: Joi.string().optional(),
  psychiatristId: Joi.number().required(), 
});

module.exports = patientSchema;