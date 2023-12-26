const Signupschema = require('../model/User_Model')
const Check_Login = async (req,res,next)=>{
    try{
        const{email,password}=req.body
        await Signupschema.findOne({email:email}).then((data)=>{
            if(!data){
                res.status(404).send({"message":"Use not Found"})
            }
            else{
                Signupschema.findOne({password:password}).then(()=>{
                        next()
                })
            }
        })
    }
    catch(err){
        console.log(err,"errorin auth")
        res.status(500).json({
            status:500,
            message:"Internal server error"
        })
    }
}

module.exports = Check_Login