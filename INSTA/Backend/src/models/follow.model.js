const mongoose = require('mongoose')
const followSchema = new mongoose.Schema({
    follower: {
        type: String,
    },
    followee: {
        type: String,
    }
},{ timestamps: true }
)
const followModel = mongoose.model('Follow', followSchema)
module.exports = followModel