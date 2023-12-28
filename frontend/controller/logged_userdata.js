const Logged_user = require('../model/Logged_Model')

const Loggeduser_Controller = async (req, res) => {
try{
    const {email} = req.body.email
    const User = await  Loginschema.findOne({email:email})
    if(User){
        res.status(200).send(User)
    }
    else {
        return res.status(404).send({ message: "Logged user  not found" });
    }

} catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error controller" });
}

}
module.exports = Loggeduser_Controller;