const express = require('express')
const followRouter = express.Router()
const followModel = require('../models/follow.model')
const followController = require('../controllers/follow.controller')
const checkAuth = require('../middleware/auth.middle').checkAuth

followRouter.post('/follow/:username', checkAuth, followController.followUser)
followRouter.post('/unfollow/:username', checkAuth, followController.unfollowUser)

module.exports = followRouter