const { Joi } = require('celebrate');

module.exports = Joi.object({
  idUser: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  bannerImageUrl: Joi.string().required(),
}).options({ stripUnknown: true });
