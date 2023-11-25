const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')


const auth = async (req,res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token ,process.env.JWT_SECRET_KEY)
        const user = await User.findOne({
            _id:decoded._id
        })

        if(!user){
            throw new Error("Unable to login, invalid pw")
        } 
        req.userId = user._id,
        req.token  = token

        next()
    }catch(err){
        res.status(401).send({error:err.message})
    }
}

module.exports = auth