const { Joi, celebrate, Segments } = require('celebrate');
const router = require('express').Router();
const Controller = require('../controller/community-controller');
const Schema = require('../domain/models/community');
const jwtHelper = require('../infra/jwt-helper');

router.use(jwtHelper.authenticateToken);

router.post('/',
  celebrate({
    [Segments.BODY]: Schema,
  }), Controller.create);

router.get('/list',
  Controller.getAll);

router.get('/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({ id: Joi.string().required() }),
  }), Controller.getById);

router.get('/ranking/:order',
  celebrate({
    [Segments.PARAMS]: Joi.object({ order: Joi.bool().required() }),
  }), Controller.getSorted);

module.exports = router;
