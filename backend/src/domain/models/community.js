const { Joi } = require('celebrate');

module.exports = Joi.object({
  id: Joi.string(),
  name: Joi.string().required(),
  idUser: Joi.string().required(),
  desc: Joi.string().required(),
  reputation: Joi.number().required(),
  bannerImageUrl: Joi.string().required(),
  profileImageUrl: Joi.string().required(),
}).options({ stripUnknown: true });
