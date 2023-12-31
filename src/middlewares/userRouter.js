const {Router} = require('express')
const { teste } = require('../controllers/client')
const router = Router()

router.post('/', teste)

module.exports = router