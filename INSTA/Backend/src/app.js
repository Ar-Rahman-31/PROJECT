const express=require('express')
const cookieParser=require('cookie-parser')
const authRouter=require('./routes/authRouter')
const app=express()


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRouter)
app.use('/api/post',require('./routes/postRouter'))





module.exports =app