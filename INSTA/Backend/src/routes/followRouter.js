const express = require('express')
const followRouter = express.Router()
const followModel = require('../models/follow.model')
const followController = require('../controllers/follow.controller')
const checkAuth = require('../middleware/auth.middle').checkAuth

followRouter.post('/:username', checkAuth, followController.followUser)


module.exports = followRouter