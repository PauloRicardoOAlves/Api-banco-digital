const {Router} = require('express')
const router = Router()

const clientRouter = require('./clientRouter')

router.use('/cliente', clientRouter)

module.exports = router