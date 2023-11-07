const User = require("../models/signupModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

const createUser =asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if(!(name && email && password)){
        res.status(401)
        throw new Error("All fields are mandatory")
    }
    const alreadyExist = await User.findOne({email})
    if(alreadyExist){
        res.status(400)
        throw new Error("user already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name, 
        email, 
        password: hashedPassword
    })
    const token = jwt.sign(
        {
            id: user._id,
            name,
            email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "2h"
        }
    )
    

    res.status(200).json({name: name, email: email, token})
})

const getUser =asyncHandler( async(req, res) => {
    const user = await User.findById(req.params.id)

    res.json(user)
})

const updateUser =asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
    }
    const update = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    res.json(update)
})

const deleteUser =asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
    }
    const remove = await User.findByIdAndDelete(req.params.id)
    res.json(remove)
})

module.exports = {getUsers, createUser, getUser, updateUser, deleteUser}