const {Router} = require('express')
const { teste } = require('../controllers/client')
const router = Router()

router.get('/', teste)

module.exports = router