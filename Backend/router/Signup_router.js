const express = require("express")
const Check_Register  = require('../middleware/auth')
const Check_Login  = require('../middleware/loginAuth')
const Register_Controller = require('../controller/Signup_Controller')
const Login_Controller = require('../controller/Login_Controller')
const History_Quiz_Controller = require('../controller/Quiz_Questions')
const Loggeduser_Controller = require('../controller/logged_userdata')
const user_history = require('../controller/Recentlyplayed')
const Addtofav = require('../controller/Addtofav')
const router = express.Router()
const cors = require('cors')
router.use(cors())
router.use(express.json())

router.post('/Check_user',Check_Login ,Login_Controller)
router.post('/Add_user',Check_Register,Register_Controller)
router.post('/Quiz_Question',History_Quiz_Controller)
router.post('/Loggeduserinfo',Loggeduser_Controller)
router.post('/user_history',user_history)
router.post('/Addtofav',Addtofav)





module.exports = router