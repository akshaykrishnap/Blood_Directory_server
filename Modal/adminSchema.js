// mangoose
const mongoose = require('mongoose')

// schema
const adminSchema = new mongoose.Schema({

    adminId: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


// model
const admins = mongoose.model("admins", adminSchema)    // name created in atlas is used


// export model
module.exports = admins