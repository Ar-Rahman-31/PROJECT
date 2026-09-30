const mongoose =require('mongoose')

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'UserName already Exist'],
        require:[true,'UserName is reequire']
    },
    email:{
          type:String,
        unique:[true,'email already Exist'],
        require:[true,'email is reequire']
    },
    bio:String,
    userImage:{
        type:String,
        default:'    '
    },
    password:{
        type:String,
        require:[true,'Password is reequire']
    },
})

const userModule =mongoose.model('users',userSchema)

module.exports=userModule