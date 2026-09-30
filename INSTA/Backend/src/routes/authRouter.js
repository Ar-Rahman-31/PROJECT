const express =require('express')
const jwt=require('jsonwebtoken')
const crypto= require('crypto')
const userModule = require('../models/user.model')
const { profile } = require('console')
const authRouter=express.Router()



authRouter.post('/register',async(req,res)=>{
    const {username,email,password,bio,userImage}=req.body
console.log("hello");

    const isuser=await userModule.findOne({
        $or:[{email},{username}]
    })

    if(isuser)
        return res.status(409).json({
            message:'user already exist'
    })
    
    const hash=crypto.createHash('sha256').update(password).digest('hex')
    const user= userModule.create({username,email,password : hash ,bio,userImage})

    const token=jwt.sign({
        id:user._id
    },process.env.jwt_token)
   res.cookie('token',token)

   res.status(201).json({
    message:"user register successfully"
   })
})




authRouter.post('/login',async(req,res)=>{
        const {username,email,password}=req.body

    const user=await userModule.findOne({
        $or:[{email:email},{username:username}]
    })
        if(!user)
        return res.status(409).json({
            message:'user doesnot exist'
    })

    const hash=crypto.createHash('sha256').update(password).digest('hex')
    const ispassword=hash===user.password

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

})


module.exports=authRouter