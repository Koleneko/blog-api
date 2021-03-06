const { User } = require('../models/User');
const { Post } = require('../models/Post');
const { Comment } = require('../models/Comment');
const validator = require('validator');
const { entityPaginate } = require('../utils/entityPaginate');

module.exports.all = async (req, res) => {
  try {
    const result = await entityPaginate(User, req);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Произошла серверная ошибка' });
  }
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  if (!validator.isMongoId(id)) {
    res.status(400).json({ error: 'Неверный ID пользователя' });
  } else {
    try {
      const user = await User.findById(id);
      if (user) {
        req.query.userId = id;
        const comments = await entityPaginate(Comment, req);
        const posts = await entityPaginate(Post, req);
        return res.status(200).json({
          ...user.toJSON(),
          comments,
          posts,
        });
      }
      return res.status(404).json({ error: 'Такой записи нет в базе' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Произошла серверная ошибка' });
    }
  }
};

module.exports.getByName = async (req, res) => {
  const username = req.params.username;
  console.log(username)
    try {
      const user = await User.findOne({username});
      if (user) {
        req.query.userId = user._id;
        const comments = await entityPaginate(Comment, req);
        const posts = await entityPaginate(Post, req);
        return res.status(200).json({
          ...user.toJSON(),
          comments,
          posts,
        });
      }
      return res.status(404).json({ error: 'Такой записи нет в базе' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Произошла серверная ошибка' });
    }
};
