const express = require('express')
const app=express()
app.use(express.json())
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
dotenv.config()
port = process.env.Port
const router = require(".//router/Signup_router")
app.use(router)
const cors = require('cors')
app.use(cors())
const History_Quiz = require('./model/Quizquestion');



mongoose.connect(process.env.Atlasurl)
.then(()=>{
    console.log("Database Connected ")
})
.catch((err)=>{
    console.log("err while connecting to DB")
})







app.listen(port,()=>{
    console.log(`Backend server is listning on Port:${port}`)
})





