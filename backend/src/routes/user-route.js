const { Joi, celebrate, Segments } = require('celebrate');
const router = require('express').Router();
const Schema = require('../domain/models/user');
const jwtHelper = require('../infra/jwt-helper');
const Controller = require('../controller/user-controller');

router.post('/signup',
  celebrate({
    [Segments.BODY]: Schema,
  }), Controller.signup);

router.get('/', Controller.get);

router.post('/login',
  celebrate({
    [Segments.BODY]: Joi.object({
      email: Joi.string().lowercase().required(),
      password: Joi.string().required(),
    }),
  }), Controller.login);

router.put('/community/:id',
  jwtHelper.authenticateToken,
  celebrate({
    [Segments.PARAMS]: Joi.object({ id: Joi.string().required() }),
  }), Controller.community);

module.exports = router;
