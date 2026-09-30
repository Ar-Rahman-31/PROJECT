require('dotenv').config()
const app=require('./src/app')
const cookieParser=require('cookie-parser')
const connectDb =require('./src/config/database')

connectDb()

app.listen(3000,()=>{
    console.log('Server running at port 3000');
    
})