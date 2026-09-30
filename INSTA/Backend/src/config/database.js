const mongoose =require('mongoose')

function connectDb() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to database');
        
    })
    
}

module.exports =connectDb