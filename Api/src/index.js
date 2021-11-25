require('dotenv').config()
const express = require('express')
const rota = require('./controller')
const app = express()

const porta = process.env.PORT || 3100

app.use(express.json())
app.use('/', rota)
app.listen(porta)