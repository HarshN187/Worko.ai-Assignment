const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});

const validateUser = (user) => {
  return userSchema.validate(user);
};

module.exports = validateUser;
