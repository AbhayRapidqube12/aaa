const Logged_user = require('../model/Logged_Model')

const user_history = async (req,res)=>{
    // console.log("Req body",req.body)
    const {email} = req.body
    const data = await Logged_user.findOne({email:email})
    if(data){
        return res.status(200).send({data:data.Quizhistory})
    }
    else{
        return res.status(500).send({"Message":"Data not exits"})
    }

}

module.exports = user_history