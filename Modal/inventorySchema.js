const mongoose = require('mongoose')


// schema

const inventorySchema = new mongoose.Schema({
    sl:{
        type:String,
        required:true 
    },
    bloodgroup:{
        type:String,
        required:true 
    },
    total:{
        type:String,
        required:true 
    },
    bloodbank:{
        type:String,
        required:true 
    }
    
})

// model

const inventories = mongoose.model("inventories",inventorySchema)

module.exports = inventories
