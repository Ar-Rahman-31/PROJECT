const express = require('express')
const multer = require('multer')
const postModel = require('../models/post.model')
const ImageKit =require ('@imagekit/nodejs')
const {toFile} =require ('@imagekit/nodejs')


const imagekit = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});


async function createPost(req, res) {
    console.log(req.body,req.file)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer)), // or file path
        fileName: req.file.originalname,
        folder: '/posts'
    });
    res.status(201).json({
        message: 'Post created successfully',
        post: file
    })
}          
    




    module.exports = {
        createPost
    }
