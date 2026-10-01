const express =require('express')
const authRouter=express.Router()
const authcontroller=require('../controllers/auth.controller')



authRouter.post('/register',authcontroller.registerUser)
authRouter.post('/login',authcontroller.loginUser)


module.exports=authRouter