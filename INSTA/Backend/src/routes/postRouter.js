const express = require('express')
const multer = require('multer')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const storage = multer.memoryStorage()
const upload = multer({ storage:multer.memoryStorage() })

postRouter.post('/create', upload.single('image'), postController.createPost)





module.exports = postRouter