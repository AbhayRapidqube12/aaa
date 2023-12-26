const mongoose= require('mongoose')
const Loginschema = mongoose.Schema({
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
    confirmPassword:({
        type:String,
        required:true
    })
})

module.exports = mongoose.model('Signup-details',Loginschema)