const moment = require('moment');
const dynamoHelper = require('../infra/dynamo-helper');

const tableName = 'comment';

module.exports = {
  async create(req, res, next) {
    try {
      req.body.id = dynamoHelper.getRandomKey();
      req.body.date = moment().unix();
      req.body.answers = [];
      req.body.upvotes = [];
      req.body.downvotes = [];
      await dynamoHelper.create(tableName, req.body);
      if ('idPost' in req.body) {
        const post = await dynamoHelper.queryTableWhereId('post', 'id', req.body.idPost);
        post.comments.push(req.body.id);
        await dynamoHelper.create('post', post);
      } else {
        const comment = await dynamoHelper.queryTableWhereId('comment', 'id', req.body.idComment);
        comment.answers.push(req.body.id);
        await dynamoHelper.create('comment', comment);
      }
      return res.json(req.body);
    } catch (error) {
      return next(error);
    }
  },
  async vote(req, res, next) {
    try {
      const { email } = req.user;
      const { id, type } = req.params;
      const comment = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
      comment.upvotes = comment.upvotes.filter((e) => e !== email);
      comment.downvotes = comment.downvotes.filter((e) => e !== email);
      switch (type) {
        case 'UPVOTE':
          comment.upvotes.push(email);
          break;
        case 'DOWNVOTE':
          comment.downvotes.push(email);
          break;
        default:
      }
      await dynamoHelper.create(tableName, comment);
      return res.json(comment);
    } catch (error) {
      return next(error);
    }
  },
  async getByIds(idList) {
    try {
      const comments = [];
      for (let index = 0; index < idList.length; index += 1) {
        try {
          const id = idList[index];
          const comment = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
          comment.answers = await module.exports.getByIds(comment.answers);
          comments.push(comment);
        } catch (err) {
          console.log(err);
        }
      }
      return comments;
    } catch (error) {
      return [];
    }
  },
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await dynamoHelper.queryTableWhereId(tableName, 'id', id);
      comment.answers = await module.exports.getByIds(comment.answers);
      return res.json(comment);
    } catch (error) {
      return next(error);
    }
  },
};
