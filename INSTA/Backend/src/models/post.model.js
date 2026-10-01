const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    image: {
        type: String,
        default: ''
    }
})
const postModel = mongoose.model('Post', postSchema)
module.exports = postModel