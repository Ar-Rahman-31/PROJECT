const express = require('express')
const multer = require('multer')
const postModel = require('../models/post.model')
const ImageKit =require ('@imagekit/nodejs')
const {toFile} =require ('@imagekit/nodejs')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const imagekit = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});


async function createPost(req, res) {
    console.log(req.body,req.file)

    const token = req.cookies.token //here we are getting the token from the cookie instead of the request body, 
         //as it is more secure to store the token in a cookie rather than sending it in the request body.
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized access' })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.jwt_token) 
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    } 
    //here we are verifying the token using the jwt.verify method,
     // which will decode the token and return the payload if the token is valid,
     //  otherwise it will throw an error.

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
        user: decoded.id,
        caption: req.body.caption,
        image: file.url
    })
    res.status(201).json({
        message: 'Post created successfully',
        post: post
    })
}          
    
async function getPosts(req, res) {
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized access' })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.jwt_token)// here we are verifying the token using the jwt.verify method,
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    }   
    const posts = await postModel.find({ user: decoded.id }) // here we are fetching all the posts of the logged in user from the database using the postModel.find method,
     // which takes the user id as a parameter and returns an array of posts.
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    })

    
}


async function getdetails(req, res){
    token =req.cookies.token
    if(!token){
        return res.status(401).json({message:'Unauthorized access'})
    }
    let decoded;
    try{
        decoded=jwt.verify(token,process.env.jwt_token)
    }
    catch(err){
        return res.status(401).json({message:'Invalid token'})
    }

    let userid=decoded.id
    let postid=req.params.id

    const posts=await postModel.findById(postid )

    if(!posts){
        return res.status(404).json({message:'Post not found'})
    }

    res.status(200).json({
        message:'Post fetched successfully',
        posts:posts
    })  
} 

    module.exports = {
        createPost,
        getPosts,
        getdetails
    }
