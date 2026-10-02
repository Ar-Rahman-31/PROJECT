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

    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({ message: 'Unauthorized access' })
    }
    const decoded = jwt.verify(token, process.env.jwt_token)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer)), // or file path
        fileName: req.file.originalname,
        folder: '/posts'
    });

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
    




    module.exports = {
        createPost
    }
