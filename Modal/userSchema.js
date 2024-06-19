const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    mailId:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    bloodgroup:{
        type:String,
        require:true
    }
})

// model
const users = mongoose.model("users",userSchema)    // name created in atlas is used


// export model
module.exports = users
