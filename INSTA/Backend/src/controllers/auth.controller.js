const express =require('express')
const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken')
// const crypto= require('crypto')
const userModule = require('../models/user.model')

async function registerUser(req,res){
    const {username,email,password,bio,userImage}=req.body

    const isuser=await userModule.findOne({
        $or:[{email},{username}]
    })

    if(isuser)
        return res.status(409).json({
            message:'user already exist'
    })
    const hash=await bcrypt.hash(password,10) 
    //in the place of crypto we can use bcrypt to hash the password before storing it in the database
    const user= await userModule.create({username,email,password : hash ,bio,userImage})

    const token=jwt.sign({
        id:user._id
    },process.env.jwt_token)
   res.cookie('token',token)

   res.status(201).json({
    message:"user register successfully"
   })
}

async function loginUser(req,res){
        const {username,email,password}=req.body

    const user=await userModule.findOne({
        $or:[{email:email},{username:username}]
    })
        if(!user)
        return res.status(409).json({
            message:'user doesnot exist'
    })
    //const hash=crypto.createHash('sha256').update(password).digest('hex')
    //const ispassword=hash===user.password
    
    const ispassword = await bcrypt.compare(password,user.password) 
     //in the palce of crypto we can use bcrypt to compare the password with the hashed password stored in the database

    if(!ispassword){
        return res.status(409).json({
            message:'Incorrect Password'
        })
    }

    const token=jwt.sign({
        id:user._id
    },process.env.jwt_token)

    res.status(201).json({
        messgae:'Login successfully',
        user:{  username:user.username,
                email:user.email,
                bio:user.bio,
                profile:user.userImage
        }
    })

}

module.exports={registerUser,loginUser}