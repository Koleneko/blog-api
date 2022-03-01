const {User} = require("../models/User");
const {Post} = require("../models/Post");

module.exports.email = async (req, res) => {
  try {
	const {email} = req.body;
	const emailFromDb = await User.findOne({email})
	if (emailFromDb) {
	  return res.status(400).json({error: 'Пользователь с такой почтой уже зарегистрирован'});
	}
	// res.sendStatus(200)
  } catch (err) {
	console.log(err)
	return res.status(500).json({error: 'Ошибка при проверке email'})
  }
}

module.exports.unique = async (req, res) => {
  const {username, email, slug} = req.query;
  if (username) {
	try {
	  const usernameFromDb = await User.findOne({username})

	  if (usernameFromDb) {
		return res.status(400).json({error: 'Пользователь с таким ником уже зарегистрирован'});
	  }
	  res.sendStatus(200)
	} catch (err) {
	  console.log(err)
	  return res.status(500).json({error: 'Ошибка при проверке ника'})
	}
  } else if (email) {
	try {
	  const emailFromDb = await User.findOne({email})
	  if (emailFromDb) {
		return res.status(400).json({error: 'Пользователь с такой почтой уже зарегистрирован'});
	  }
	  res.sendStatus(200)
	} catch (err) {
	  console.log(err)
	  return res.status(500).json({error: 'Ошибка при проверке email'})
	}
  } else if (slug)
	try {
	  const postFromDb = await Post.findOne({slug})
	  if (postFromDb) {
		return res.status(400).json({error: 'Пост с таким названием уже существует'});
	  }
  		res.sendStatus(200)
	} catch (err) {
	  console.log(err)
	  return res.status(500).json({error: 'Ошибка при проверке названия поста'})
	}


}
