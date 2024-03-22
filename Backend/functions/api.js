const express = require('express')
const serverless = require('serverless-http')
const translateRoute = require('../router/transilateRoute')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200)
  }
  next()
});

app.get('/.netlify/functions/app', (req, res) => {
  res.send('Hello World!')
});

app.use('/.netlify/functions/api', translateRoute)

module.exports.handler = serverless(app)
