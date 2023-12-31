const {Router} = require('express')
const router = Router()

const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')

router.use('/usuario', userRouter)
router.use('/categoria', categoryRouter)

module.exports = router