'use strict'
const dotenv = require('dotenv').config({ path: 'config.env' })

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORTLISTEN, () => {
  console.log(`PORT - ${process.env.PORTLISTEN}`)
})