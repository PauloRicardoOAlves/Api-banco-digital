const {Router} = require('express')
const { viewCategories } = require('../controllers/categoryController')
const router = Router()

router.get('/', viewCategories)

module.exports = router