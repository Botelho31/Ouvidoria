const dynamoHelper = require('../infra/dynamo-helper');

const tableName = 'community';

module.exports = {
  async create(req, res, next) {
    try {
      req.body.id = dynamoHelper.getRandomKey();
      await dynamoHelper.create(tableName, req.body);
      return res.json(req.body);
    } catch (error) {
      return next(error);
    }
  },
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const community = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
      return res.json(community);
    } catch (error) {
      return next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const community = await dynamoHelper.scan(tableName);
      return res.json(community);
    } catch (error) {
      return next(error);
    }
  },
  async getSorted(req, res, next) {
    try {
      const { order } = req.params;
      const data = await dynamoHelper.scan(tableName);
      data.sort((a, b) => {
        if (order) {
          return a.reputation - b.reputation;
        }
        return b.reputation - a.reputation;
      });
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  },
};
