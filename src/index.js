const express = require('express')
const app = express()
require('dotenv').config()

const router = require('./middlewares/router')

app.use(express.json())

app.use(router)

const serverPort = process.env.SERVER_PORT || 3000

app.listen(serverPort, () => {
    console.log(`Servidor rodando na porta ${serverPort}`)
})