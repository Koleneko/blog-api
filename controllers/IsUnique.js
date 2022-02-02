const {User} = require("../models/User");

module.exports.email = async (req, res) => {
  try {
	const {email} = req.body;
	const emailFromDb = await User.findOne({email})
	if(emailFromDb) {
	  return res.status(400).json({ error: 'Пользователь с такой почтой уже зарегистрирован' });
	}
	// res.sendStatus(200)
  } catch (err) {
	console.log(err)
	return res.status(500).json({error: 'Ошибка при проверке email'})
  }
}

module.exports.username = async (req, res) => {
  try {
	const {username} = req.body;
	const usernameFromDb = await User.findOne({username})

	console.log(usernameFromDb)
	if(usernameFromDb) {
	  return res.status(400).json({ error: 'Пользователь с таким ником уже зарегистрирован' });
	}
	res.sendStatus(200)
  } catch (err) {
	console.log(err)
	return res.status(500).json({error: 'Ошибка при проверке ника'})
  }
}
