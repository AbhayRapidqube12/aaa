// const register_User = require('../controller/Signup_Controller') 
const Signupschema = require('../model/User_Model')

 const Register_validation = async(req,res,next)=>{
    try{
        const {email} = req.body
        await Signupschema.findOne({ email:email }).then((user) => {
            if(user){
                res.send({ message:"user alredy exits please Register  with new email" ,status:0})
            }else{
                next()
            }
            
        })
    }catch(err){
        
        res.status(500).json({
            status:500,
            error:err,
            message:"Internal server error"
        })
    }
}


module.exports = Register_validation 