const { Joi, celebrate, Segments } = require('celebrate');
const router = require('express').Router();
const Controller = require('../controller/post-controller');
const Schema = require('../domain/models/post');
const jwtHelper = require('../infra/jwt-helper');

router.use(jwtHelper.authenticateToken);

router.post('/',
  celebrate({
    [Segments.BODY]: Schema,
  }), Controller.create);

router.put('/vote/:id/type/:type',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required(),
      type: Joi.string().valid('UPVOTE', 'DOWNVOTE', 'NOTHING').required(),
    }),
  }), Controller.vote);

router.get('/user', Controller.getByIdUser);

router.get('/community/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({ id: Joi.string().required() }),
  }), Controller.getByIdCommunity);

router.get('/list', Controller.getAll);

router.get('/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({ id: Joi.string().required() }),
  }), Controller.getById);

module.exports = router;
