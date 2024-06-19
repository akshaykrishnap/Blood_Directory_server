const { model } = require('mongoose');
const users = require('../Modal/userSchema')


// import jwt 
const jwt = require('jsonwebtoken')


// logic for user registraion
exports.register = async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body

    const existingUsers = await users.findOne({ mailId: email })


    try {

        if (existingUsers) {
            res.status(406).json('User Already Exist')
        } else {
            const newUsers = new users({
                username,   // same as userschema
                mailId: email,
                password,
                mobile: "",
                bloodgroup: ""
            })
            // store the particular data in mongodb
            await newUsers.save()
            res.status(200).json(newUsers)
        }

    } catch (error) {
        res.status(401).json('Registration Failed')
        console.log(error);
    }



}


// logic for login
exports.login = async (req, res) => {



    const { email, password } = req.body

    try {
        const existingUsers = await users.findOne({ mailId: email, password })

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