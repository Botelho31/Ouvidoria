const moment = require('moment');
const dynamoHelper = require('../infra/dynamo-helper');

const tableName = 'news';

module.exports = {
  async create(req, res, next) {
    try {
      req.body.id = dynamoHelper.getRandomKey();
      req.body.date = moment().unix();
      await dynamoHelper.create(tableName, req.body);
      return res.json(req.body);
    } catch (error) {
      return next(error);
    }
  },
  async list(req, res, next) {
    try {
      const news = await dynamoHelper.scan(tableName);
      return res.json(news);
    } catch (error) {
      return next(error);
    }
  },
};
