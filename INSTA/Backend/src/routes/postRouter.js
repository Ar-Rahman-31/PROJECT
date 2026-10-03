const express = require('express')
const multer = require('multer')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const storage = multer.memoryStorage()
const checkAuth = require('../middleware/auth.middle').checkAuth
const upload = multer({ storage:multer.memoryStorage() })

postRouter.post('/create', checkAuth, upload.single('image'), postController.createPost)
postRouter.get('/getposts', checkAuth, postController.getPosts)
postRouter.get('/getdetails/:id', checkAuth, postController.getdetails)




module.exports = postRouter
