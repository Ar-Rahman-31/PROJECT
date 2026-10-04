const followModel = require('../models/follow.model')

async function followUser(req, res) {
    const userfollower = req.decoded.username
    const userfollowee = req.params.username

    if (userfollower === userfollowee) {
        return res.status(400).json({ message: "You cannot follow yourself" })
    }


    if (await followModel.findOne({ follower: userfollower, followee: userfollowee })) {
        return res.status(400).json({ message: "You are already following this user" })
    }

const followed = await followModel.create({ follower: userfollower, followee: userfollowee })
    return res.status(200).json({ message: "Followed successfully", followed })
}

   module.exports = { followUser }