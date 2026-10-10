const express = require('express')
const multer = require('multer')
const postModel = require('../models/post.model')
const ImageKit =require ('@imagekit/nodejs')
const {toFile} =require ('@imagekit/nodejs')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const { checkAuth } = require('../middleware/auth.middle')

const imagekit = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});


async function createPost(req, res) {
   
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer)), // or file path
        fileName: req.file.originalname,
        folder: '/posts'
    });
    // here we are uploading the image to imagekit using the imagekit.files.upload method,
     // which takes the file buffer, file name and folder name as parameters and returns the uploaded file details.



     //here we are creating a new post in the database using the postModel.create method,
     // which takes the user id, caption and image url as parameters and returns the created post details.
    const post = await postModel.create({
        user: req.decoded.id,
        caption: req.body.caption,
        image: file.url
    })
    res.status(201).json({
        message: 'Post created successfully',
        post: post
    })
}          
    
async function getPosts(req, res) {
   
    
    const posts = await postModel.find({ user: decoded.id }) // here we are fetching all the posts of the logged in user from the database using the postModel.find method,
     // which takes the user id as a parameter and returns an array of posts.
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    })

    
}


async function getdetails(req, res){
  

    let userid=req.decoded.id //here we are getting the user id from the decoded token, which is passed in the request headers as a Bearer token.
    let postid=req.params.id //here we are getting the post id from the request params, which is passed in the url as /posts/:id

    const posts=await postModel.findById(postid )

    console.log('posts:',posts)
      if(!posts){
        return res.status(404).json({message:'Post not found'})
    }

    if(posts.user.toString() !==userid){
        return res.status(403).json({message:'You are not authorized to view this post'})   
    }

    res.status(200).json({
        message:'Post fetched successfully',
        posts:posts
    })  
}

async function getfeed(req,res){
    const posts = await postModel.find().populate('user')
    res.status(200).json({
        message : "Post fetch successfully",posts
    })
}

    module.exports = {
        createPost,
        getPosts,
        getfeed,
        getdetails
    }
