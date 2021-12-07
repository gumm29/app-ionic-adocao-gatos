require('dotenv').config()

const cors = require('cors')
const express = require('express')
const rota = require('./controller')
const app = express()

const porta = process.env.PORT || 3100

app.use(cors({ origin: '*' , credentials :  true}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Credentials", true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
  next()
})

app.use(express.json())
app.use('/', rota)
app.listen(porta)