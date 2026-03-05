const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

    const hash = await userModel.create({
        username,
        email,
        password: hash
    })

    const token =  jwt.sign(
        {id: user._id, username: user.username, },
        process.env.JWT_Token,
        {
            expiresIn:"1d"
        }
    )
    res.cookie("token", token)
    res.status(201).json({
        message:"User Registered successfully"
    })

}

module.exports = { registerUserController }