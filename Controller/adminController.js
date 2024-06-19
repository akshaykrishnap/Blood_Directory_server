const {model} = require('mongoose')
const admins = require('../Modal/adminSchema')


// import jwt 
const jwt = require('jsonwebtoken')

// logic for admin login
exports.adminLogin = async (req, res) => {
    const { email, password } = req.body


    try {
        const existingUsers = await admins.findOne({  email, password })

        if (existingUsers) {

             // token generate - sign('data', 'secratekey' )
             const token = jwt.sign({ userId: existingUsers._id }, "secretekey")

            res.status(200).json({existingUsers,token})
        } else {
            res.status(406).json('Incorrect email or password')
        }
    } catch (err) {
        res.status(401).json(`Login failed due to ${err}`)
    }

}