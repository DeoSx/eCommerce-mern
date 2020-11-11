const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')
const generateToken = require('../utils/generateToken')

// @desc auth
// @route post /api/user/login
// @access Public
const authLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

module.exports = {
  authLogin
}