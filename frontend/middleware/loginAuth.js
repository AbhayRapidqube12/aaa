const Signupschema = require('../model/User_Model');

const Check_Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Signupschema.findOne({ email:email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    else{
            next()
    }
  } catch (err) {
    console.log(err, "error in auth");
    res.status(500).json({
      status: 500,
      message: "Internal server error middelware"
    });
  }
};

module.exports = Check_Login;
