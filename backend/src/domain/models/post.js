const { Joi } = require('celebrate');

module.exports = Joi.object({
  idCommunity: Joi.string().required(),
  communityName: Joi.string().required(),
  userName: Joi.string().required(),
  idUser: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  status: Joi.string().required(),
  type: Joi.string().required(),
});
