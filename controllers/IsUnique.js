const {User} = require("../models/User");

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
  const {username, email} = req.query;
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
  }


}
