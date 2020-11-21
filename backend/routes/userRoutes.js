const { Router } = require('express')
const { authLogin, getUserProfile } = require('../controllers/userController')

const authProtect = require('../middleware/authMiddleware')

const router = Router()

router.post('/login', authLogin)
router.route('/profile').get(authProtect, getUserProfile)

module.exports = router
