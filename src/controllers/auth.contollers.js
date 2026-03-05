const userModel = require("../models/user.model")

async function registerUserController(req, res) {

    const {username, email, password} = req.body

    if(!username, !email, !password){
        return res.status(400).json({
            message:"Please Provide Credentials"
        })
    }
    const isUserAlreadyExists = await userModel.findOne({
        $or: [{username},{email}]
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"Account already exists with this email address and username"
        })
    }

    
}

module.exports = { registerUserController }