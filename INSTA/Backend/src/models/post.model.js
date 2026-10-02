const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    caption: {
        type: String,
        required: [true, 'Caption is required']
    },
    image: {
        type: String,
        default: ''
    }
})
const postModel = mongoose.model('Post', postSchema)
module.exports = postModel