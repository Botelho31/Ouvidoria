const moment = require('moment');
const dynamoHelper = require('../infra/dynamo-helper');
const commentController = require('./comment-controller');

const tableName = 'post';

module.exports = {
  async create(req, res, next) {
    try {
      req.body.id = dynamoHelper.getRandomKey();
      req.body.date = moment().unix();
      req.body.comments = [];
      req.body.upvotes = [];
      req.body.downvotes = [];
      await dynamoHelper.create(tableName, req.body);
      return res.json(req.body);
    } catch (error) {
      return next(error);
    }
  },
  async vote(req, res, next) {
    try {
      const { email } = req.user;
      const { id, type } = req.params;
      const post = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
      post.upvotes = post.upvotes.filter((e) => e !== email);
      post.downvotes = post.downvotes.filter((e) => e !== email);
      switch (type) {
        case 'UPVOTE':
          post.upvotes.push(email);
          break;
        case 'DOWNVOTE':
          post.downvotes.push(email);
          break;
        default:
      }
      await dynamoHelper.create(tableName, post);
      return res.json(post);
    } catch (error) {
      return next(error);
    }
  },
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const post = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
      post.comments = await commentController.getByIds(post.comments);
      console.log(post);
      return res.json(post);
    } catch (error) {
      return next(error);
    }
  },
  async getByIdUser(req, res, next) {
    try {
      const { email } = req.user;
      const user = await dynamoHelper.queryTableWhereId('user', 'email', email);
      const posts = [];
      const data = await dynamoHelper.scan(tableName);
      for (let i = 0; i < user.communitys.length; i += 1) {
        const comPosts = data.filter((e) => e.idCommunity === user.communitys[i]);
        posts.push(...comPosts);
      }
      return res.json(posts);
    } catch (error) {
      return next(error);
    }
  },
  async getByIdCommunity(req, res, next) {
    try {
      const { id } = req.params;
      let data = await dynamoHelper.scan(tableName);
      data = data.filter((e) => e.idCommunity === id);
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const data = await dynamoHelper.scan(tableName);
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  },
};
