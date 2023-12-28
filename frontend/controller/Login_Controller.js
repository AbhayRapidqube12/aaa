const Signupschema = require('../model/User_Model');
const Loginschema =require("../model/Logged_Model")
const currentDate = new Date();

let newDate  = currentDate.toLocaleString()

const Login_Controller = async (req, res) => {
    const { password,email} = req.body;
    try {
        // const user = await Signupschema.findOne({ email: email, password: password });
        const user = await Signupschema.findOne({ email: email,password:password});
        const Existinguser = await  Loginschema.findOne({email:email})
       if(Existinguser){
        await Loginschema.findOneAndUpdate(
            { email: email },
            { $set: {islogged: true, lastlogin: newDate } }
          );
          return res.status(200).send({message:"Login Successfully", message1: "User updated and logged in successfully" , data:Existinguser });
       }else{
        if(user){
           
            // return res.status(201).send({ user, message: "Found user" });
            const {firstname,lastname,mobileno,email,password} =user;
            const logged_users = new Loginschema({
                firstname:firstname,
                lastname:lastname,
                islogged:true,
                mobileno:mobileno,
                lastlogin:newDate,
                email:email,
                password:password
            })
            logged_users.save()
            res.status(200).send({message:"Login Successfully",data:user})
        }
         else {
            return res.status(404).send({ message: "User not found" });
        }
       
    }
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error controller" });
    }
};

module.exports = Login_Controller;
