const { Router } = require('express')
const { authLogin } = require('../controllers/userController')

const router = Router()

router.post('/login', authLogin)

module.exports = router
