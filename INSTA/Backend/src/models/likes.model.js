const mongoose=require('mongoose')
const likeSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
})
const likesModel= mongoose.model('likes', likeSchema)
module.exports = likesModel