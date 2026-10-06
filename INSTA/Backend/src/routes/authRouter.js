const express =require('express')
const authRouter=express.Router()
const authcontroller=require('../controllers/auth.controller')


//api/auth/register
authRouter.post('/register',authcontroller.registerUser)
//api/auth/login
authRouter.post('/login',authcontroller.loginUser)


module.exports=authRouter