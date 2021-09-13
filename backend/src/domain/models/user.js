const { Joi } = require('celebrate');

module.exports = Joi.object({
  email: Joi.string().lowercase().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  age: Joi.number().required(),
  race: Joi.string().required(),
  uf: Joi.string().required(),
  city: Joi.string().required(),
});
