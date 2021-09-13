const { celebrate, Segments } = require('celebrate');
const router = require('express').Router();
const Controller = require('../controller/news-controller');
const Schema = require('../domain/models/news');
const jwtHelper = require('../infra/jwt-helper');

router.use(jwtHelper.authenticateToken);

router.post('/',
  celebrate({
    [Segments.BODY]: Schema,
  }), Controller.create);

router.get('/list', Controller.list);

module.exports = router;
