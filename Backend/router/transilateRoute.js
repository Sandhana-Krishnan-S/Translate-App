const express = require('express')
const translateTo = require('../googleTrans')
const translateRoute = express.Router()

translateRoute.post("/translate" , translateTo)

module.exports = translateRoute