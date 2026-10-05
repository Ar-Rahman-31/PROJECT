const likesModel = require('../models/likes.model')

const mongoose = require('mongoose')



async function likePost(req, res) {

    const username = req.decoded.username
    const post_id = req.params.post_id

    console.log("DATABASE:", mongoose.connection.name);
console.log("COLLECTION:", likesModel.collection.name);
//check if the post_id is a valid ObjectId
if (!mongoose.Types.ObjectId.isValid(req.params.post_id)) {
    return res.status(400).json({ message: "Invalid post ID" })
}

const existingLike = await likesModel.findOne({ username, post_id })
    if (existingLike) {
        return res.status(400).json({ message: "You have already liked this post" })
    } 
    const liked = await likesModel.create({ username, post_id })
 
    return res.status(200).json({ message: "Post liked successfully", liked })
}  
const unlikePost = async (req, res) => {
    const username = req.decoded.username
    const post_id = req.params.post_id 
    if (!mongoose.Types.ObjectId.isValid(req.params.post_id)) {
        return res.status(400).json({ message: "Invalid post ID" })
    }
    const existingLike = await likesModel.findOne({ username, post_id })
    if (!existingLike) {
        return res.status(400).json({ message: "You have not liked this post" })
    }
    await likesModel.deleteOne({ username, post_id })
    return res.status(200).json({ message: "Post unliked successfully" })
}


module.exports = { likePost, unlikePost }