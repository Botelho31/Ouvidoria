const bcrypt = require('bcryptjs');
const jwtHelper = require('../infra/jwt-helper');
const dynamoHelper = require('../infra/dynamo-helper');

const tableName = 'user';

module.exports = {
  async signup(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await dynamoHelper.queryTableWhereId(tableName, 'email', email);
      console.log(user);
      if (user !== undefined) {
        return res.json({ mensagem: 'EMAIL_JA_CADASTRADO' });
      }
      req.body.communitys = [];
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
      await dynamoHelper.create(tableName, req.body);
      req.body.token = jwtHelper.generateAccessToken(req.body);
      return res.json(req.body);
    } catch (error) {
      return next(error);
    }
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await dynamoHelper.queryTableWhereId(tableName, 'email', email);
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        user.token = await jwtHelper.generateAccessToken(user);
        return res.json(user);
      }
      res.status(400);
      return res.json({ mensagem: 'SENHA_INCORRETA' });
    } catch (error) {
      return next(error);
    }
  },
  async community(req, res, next) {
    try {
      const { id } = req.params;
      const { email } = req.user;
      const user = await dynamoHelper.queryTableWhereId(tableName, 'email', email);
      if (user.communitys.includes(id)) {
        user.communitys = user.communitys.filter((e) => e !== id);
      } else {
        user.communitys.push(id);
      }
      await dynamoHelper.update(tableName,
        {
          Key: {
            email,
          },
          UpdateExpression: 'set communitys = :c',
          ExpressionAttributeValues: {
            ':c': user.communitys,
          },
          ReturnValues: 'UPDATED_NEW',
        });
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  },
  async get(req, res, next) {
    try {
      const { email } = req.user;
      const user = await dynamoHelper.queryTableWhereId(tableName, 'email', email);
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  },
};
