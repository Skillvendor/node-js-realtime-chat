const models = require('../models/index')
const User = models.User
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signUp = async (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body

  const hashPass = await bcrypt.hash(password, 12)
  const user = new User({ email: email, password: hashPass, name: name})
  const createdUser = await user.save()

  res.status(201).json(createdUser)
}

exports.login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body

  const user = await User.findOne({ where: {email: email} })
  if (!user) {
    const error = new Error('User not found')
    error.statusCode = 404
    next(error)
  }
  validPass = await bcrypt.compare(password, user.password)
  if (!validPass) {
    const error = new Error('Wrong pass')
    error.statusCode = 401
    next(error)
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    'super-secret',
    { expiresIn: '20h' }
  )

  res.status(200).json({ token: token, user: user})
}
