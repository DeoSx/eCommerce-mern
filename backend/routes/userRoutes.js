const { Router } = require('express')
const {
  authLogin,
  getUserProfile,
  registerUser
} = require('../controllers/userController')

const authProtect = require('../middleware/authMiddleware')

const router = Router()

router.route('/').post(registerUser)
router.post('/login', authLogin)
router.route('/profile').get(authProtect, getUserProfile)

module.exports = router
