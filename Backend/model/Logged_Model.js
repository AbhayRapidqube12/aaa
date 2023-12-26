const mongoose = require('mongoose')
const looged_schem = mongoose.Schema({
    firstname:({
        type:String,
        required:true
    }),
    lastname:({
        type:String,
        required:true
    }),
    email:({
        type:String,
        required:true
    }),
    mobileno:({
        type:Number,
        required:true
    }),
    password:({
        type:String,
        required:true
    }),
     date:({
        type:String
    }),
    lastlogin:({
        type:String
    }),
    islogged:({
        type:Boolean
    })
})
module.exports = mongoose.model('logged_users',looged_schem)