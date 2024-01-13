const Signupschema = require('../model/User_Model');
const Loginschema = require("../model/Logged_Model");
const currentDate = new Date();
const newDate = currentDate.toLocaleString();

const Login_Controller = async (req, res) => {
  const { password, email } = req.body;
  
  try {
    const user = await Signupschema.findOne({ email: email });

    if (!user) {
      return res.status(404).send({status:404, message: "User not found" });
    }
    
    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).send({ status:401, message: "Invalid password" });
    }

    const existingUser = await Loginschema.findOne({ email: email });
    
    if (existingUser) {
      await Loginschema.findOneAndUpdate(
        { email: email },
        { $set: { islogged: true, lastlogin: newDate } }
      );
      return res.status(200).send({
        message: "Login Successfully",
        message1: "User updated and logged in successfully",
        data: existingUser
      });
    } else {
      const { firstname, lastname, mobileno, email, password } = user;
      const loggedUser = new Loginschema({
        firstname: firstname,
        lastname: lastname,
        islogged: true,
        mobileno: mobileno,
        lastlogin: newDate,
        email: email,
        password: password
      });
      
      await loggedUser.save();
      return res.status(200).send({
        status:1,
        message: "Login Successfully",
        data: user
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error controller" });
  }
};

module.exports = Login_Controller;
