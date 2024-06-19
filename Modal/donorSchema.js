// mongoose
const mongoose = require('mongoose')


// schema

const donorSchema = new mongoose.Schema({
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
const donors= mongoose.model("donors",donorSchema)

module.exports = donors