const mongoose = require('mongoose')



// schema

const reciverSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    userId: {
        type:String,
        require:true
    }
})


//model
const recivers= mongoose.model("recivers",reciverSchema)

module.exports = recivers
