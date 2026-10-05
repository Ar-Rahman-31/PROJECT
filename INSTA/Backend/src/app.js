const express=require('express')
const cookieParser=require('cookie-parser')

const app=express()
app.use(express.json())
app.use(cookieParser())




const authRouter=require('./routes/authRouter')
const postRouter=require('./routes/postRouter')
const followRouter=require('./routes/followRouter')
const likesRouter=require('./routes/likesRouter')


app.use('/api/user',followRouter)
app.use('/api/users',likesRouter)
app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)



module.exports =app