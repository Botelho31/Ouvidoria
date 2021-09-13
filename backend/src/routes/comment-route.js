const { Joi, celebrate, Segments } = require('celebrate');
const router = require('express').Router();
const Controller = require('../controller/comment-controller');
const Schema = require('../domain/models/comment');
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

router.get('/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object({ id: Joi.string().required() }),
  }), Controller.getById);

module.exports = router;
