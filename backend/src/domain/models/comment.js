const { Joi } = require('celebrate');

module.exports = Joi.object({
  idUser: Joi.string().required(),
  idPost: Joi.string(),
  idComment: Joi.string(),
  body: Joi.string().required(),
}).or('idPost', 'idComment');
