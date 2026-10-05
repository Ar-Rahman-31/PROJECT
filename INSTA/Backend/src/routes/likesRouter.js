const express=require('express')
const likesController=require('../controllers/likes.controller')
const {checkAuth}=require('../middleware/auth.middle')

const likesRouter=express.Router()

likesRouter.post('/like/:post_id',checkAuth,likesController.likePost)
likesRouter.post('/unlike/:post_id',checkAuth,likesController.unlikePost)
module.exports = likesRouter