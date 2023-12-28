import React, { useEffect ,useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout, LoginSuccess } from "./Action";
import toast from "react-hot-toast";
import { setUser } from "./Action";
import axios from "axios";
import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";
const NavlinkPage = () => {

  // looged user data
  const [Loggeduserinfo,setLoggeduserinfo]= useState({})

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  const handleLogout = () => {
    dispatch(Logout());
    
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleLogin = () => {
    setIslogin(!isLogin);
  };



  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userName, setUserName] = useState(""); 
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.email || formData.email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (!formData.password || formData.password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3001/Check_user",formData)
        .then((response) => {
          if(response.status === 200){
            toast.success(response.message)
            console.log(response.data,"response of login ")
            dispatch(LoginSuccess());
            setLoggeduserinfo(response.data)
          }
          else{
            toast.alert(response.message)
          }
       
        
        })
        .catch((err) => console.log(err, "error while fetching users"));
    }

  }

  // if (user) {
  //   if (user.password === formData.password) {
  //     // alert("Login successful");
  //     toast.success("Login Successfully!")
  //     dispatch(LoginSuccess());
  //     navigate("/Home");
  //     axios
  //       .post("http://localhost:3000/Loggedusers", formData)
  //       .then((result) => {
  //         console.log(result, "result of logged user is ");
  //         dispatch(setUser(user.firstName))
  //       })
        
  //       .catch((err) =>
  //         console.log(err, "error while posting logged user")
  //       );
  //   } else {
  //     toast.error("Wrong password");
      
  //   }
  // } else {
  //   toast.error("user not foud") 
    
  // }


  return (
    <>
    
      <div className="Navbar">
        <div className="Navbar_child">
       <div className="iconFlex">
        
       
       {isOpen ?<i onClick={toggleMenu} class="fa fa-times menuicon" aria-hidden="true"></i>:<i onClick={toggleMenu} className="fa fa-bars menuicon" aria-hidden="true"></i>}
          <div>
            {/* <span> QuizUp</span> */}
            <Link className="App_Name" to="/Home">
              QuizUp
            </Link>
          </div>
       </div>

       <div className="search-div">
        <input className="serach-input" placeholder="Search"/>
       </div>
          
          <div className="Navbarinner_flex">
            <span className="navlink nav1">
              <NavLink className="link" to="/">
                TakeQuiz
              </NavLink>{" "}
            </span>
            
            <span className="myquiz-span">
            <i className="fa fa-heart heart-icon" aria-hidden="true"></i>
             <a style={{ textDecoration: "none", color: "white" , }}>My Qyiz</a>
            </span>

            {/* {isLoggedIn && ( */}
              <>
              {/* <span className="navlink">
                <NavLink to="/Login"  style={{ textDecoration: "none", color: "white" , }}>Login</NavLink>
                </span>  */}
                <span className="navlink">
                {/* <NavLink to="/Signup" style={{ textDecoration: "none", color: "black" }}>Signup</NavLink> */}
                <i onClick={toggleLogin} className="fa fa-user profile-icon" aria-hidden="true"></i>
                </span>
              </>
            {/* )} */}
            
            {isLoggedIn && (
              <>
                <NavLink to="/Home" onClick={handleLogout}  style={{ textDecoration: "none", color: "red" }}>
                 Logout
                </NavLink>
              </>
            )}
             {/* {isLoggedIn && (
              <>
                <NavLink to="/Profile"   style={{ textDecoration: "none", color: "black" }}>
                 Profile
                </NavLink>
              </>
            )} */}
            
          </div>
        </div>
        {/* <span><NavLink to="/"></NavLink> </span> */}
      </div>

      <div  className={`menu ${isOpen ? 'open' : ''}`}>
      <ul className="quiz-categories">
      <NavLink to='/Home'> <li> <span><i className="fa fa-home" aria-hidden="true"></i></span> Home</li></NavLink>
        <li> <span><i className="fa fa-history" aria-hidden="true"></i></span> Recently Played</li>
        <li> <span><i className="fa fa-fire" aria-hidden="true"></i></span> Trending</li>
        <li> <span><i className="fa fa-random" aria-hidden="true"></i></span> Random</li>
        <div className="Divider_Sidebar"></div>
        <NavLink to='/history_quizes'> <li onClick={()=>{navigate('history_quizes')}}> <span><i className="fa fa-hourglass-start" aria-hidden="true"></i></span> History</li></NavLink>
        <li> <span><i className="fa fa-calculator" aria-hidden="true"></i></span> Maths</li>
        <li><span><i className="fa-solid fa-brain"></i></span> GK</li>
        <li> <span><i className="fa-solid fa-ticket"></i></span> Movies</li>
        <li> <span> <i className="fa fa-flask" aria-hidden="true"></i> </span> Science</li>
        <li> <span><i className="fa-solid fa-bowling-ball"></i></span> Sports</li>
        <li> <span><i className="fa fa-mobile" aria-hidden="true"></i></span> Technology</li>
    </ul>
      </div>
      
      <div  className={`login ${isLogin ? 'open' : ''}`}>
      {!isLoggedIn &&
      <form className="form-container centered-form" onSubmit={handleSubmit}>
      <div className="Login_title"> Log In</div>
        <div className="input-group">
          {/* <label className="label"> */}
            {/* Email: */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          {/* </label> */}
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          {/* <label className="label"> */}
            {/* Password: */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          {/* </label> */}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button  type="submit" className="Login-btn">Login</button>

        <p className="login_ptag">
          Don't have an account?{" "}
          <span
            className="RegisterNav"
            onClick={() => {
              navigate("/Signup");
            }}
            style={{ color: "blue" }}
          >
            register here
          </span>
        </p>
      </form>
}

      {isLoggedIn &&  Loggeduserinfo &&
      <div className="Profile_div">
        <p className="Profile_tag">Profile</p>

        <div className="userpic">
         <img className="dummyuser_pic" src="https://th.bing.com/th/id/OIP.KopsrvStiUZsJd84_gQgTAHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"></img> 
         <p className="Name_tag"> <span>{Loggeduserinfo.data.firstname}   {Loggeduserinfo.data.lastname}</span></p>
         <p className="Email_tag"><span>{Loggeduserinfo.data.email}</span></p>
        </div>

        <div>
          <div></div>
        </div>



      </div>
      }

              
      </div>
      {isLogin?<div className="black_bg"></div>:null}

    </>
  );
};
export default NavlinkPage;
