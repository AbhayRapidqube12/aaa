const Signupschema = require('../model/User_Model')
const currentDate = new Date();
// const bcrypt = require('bcrypt');
 let newDate  = currentDate.toLocaleString()
 const register_User = async(req,res)=>{

    const{firstname,lastname,password,confirmPassword,email,mobileno} = req.body
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const ChashedPassword = await bcrypt.hash(confirmPassword, 10);
    const Signup_User = new Signupschema ({
        firstname,
        lastname,
        password,
        confirmPassword,
        email,
        mobileno,
        date:newDate
    })
    await Signup_User.save()
    .then((data)=>{
        console.log(data)
    })
    .catch(error=>{console.log(error)})
        
    

    return res.status(201).json({
        status:201,
        message:"user registed successfully"
    })
}


module.exports = register_User