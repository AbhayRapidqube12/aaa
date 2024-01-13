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

  const [valid, setValid] = useState(true);
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
  const passwordPattern = /^(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?\/\\~-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();

    let isvalid = true
    let validationErrors = {};

    if (!formData.email || formData.email.trim() === "") {
      validationErrors.email = "Email is required";
      isvalid = false
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password  is required";
    } else if (formData.password.length < 8) {
      isvalid = false;
      validationErrors.password = "password length should be atleat 8characters";
    }else if (!passwordPattern.test(formData.password)) {
      isvalid = false;
      validationErrors.password =
        "Password should contain at least one special character, one number, and one uppercase letter";
    }

    setErrors(validationErrors);

    if (isvalid) {
      if (Object.keys(validationErrors).length === 0) {
        axios
          .post("http://localhost:3001/Check_user", formData)
          .then((response) => {
            if (response.status === 200) {
              toast.success(response.data.message);
              dispatch(LoginSuccess());
              setIslogin(false)
              setLoggeduserinfo(response.data);
            } else if (response.status === 404) {
              toast.error("User not found");
            } else if (response.status === 401) {
              toast.error("Invalid password");
            } else {
              alert("Unexpected error occurred");
            }
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 404) {
                toast.error("User not found");
              } else if (error.response.status === 401) {
                toast.error("Invalid password");
              } else {
                alert("Unexpected error occurred");
              }
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
              alert("No response received");
            } else {
              // Something happened in setting up the request that triggered an error
              console.log("Error", error.message);
              alert("Error occurred: " + error.message);
            }
            console.log(error.config);
          });
      }
    }

  }

  if(Loggeduserinfo.data){
    dispatch(setUser(Loggeduserinfo.data.email))
    // console.log('looged email',Loggeduserinfo.data.email)
  }
 

  const closeProfile = ()=>{
    setIslogin(false)
   }
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
      <NavLink to="/Recently/played">  <li> <span><i className="fa fa-history" aria-hidden="true"></i></span> Recently Played</li></NavLink>
         <li> <span><i className="fa fa-fire" aria-hidden="true"></i></span> Trending</li> 
        <li> <span><i className="fa fa-random" aria-hidden="true"></i></span> Random</li>
        <div className="Divider_Sidebar"></div>
        <NavLink to='/history_quizes'> <li onClick={()=>{navigate('history_quizes')}}> <span><i className="fa fa-hourglass-start" aria-hidden="true"></i></span> History</li></NavLink>
        <NavLink to={"/Math_quizes"} > <li> <span><i className="fa fa-calculator" aria-hidden="true"></i></span> Maths</li></NavLink>
        <NavLink to={"/Gk_quizes"} > <li><span><i className="fa-solid fa-brain"></i></span> GK</li></NavLink>
        <NavLink to={"/Movie_quizes"} > <li> <span><i className="fa-solid fa-ticket"></i></span> Movies</li></NavLink>
        <NavLink to={"/Science_quizes"} >  <li> <span> <i className="fa fa-flask" aria-hidden="true"></i> </span> Science</li></NavLink>
        <NavLink to={"/Sport_quizes"} > <li> <span><i className="fa-solid fa-bowling-ball"></i></span> Sports</li> </NavLink>
        <NavLink to={"/Tech_quizes"} ><li> <span><i className="fa fa-mobile" aria-hidden="true"></i></span> Technology</li></NavLink>
        <NavLink to={"/Tech_quizes"} ><li> <span><i className="fa fa-mobile" aria-hidden="true"></i></span> Technology</li></NavLink>
        <NavLink to={"/Tech_quizes"} ><li className="Formargin_Menu"> <span><i className="fa fa-mobile" aria-hidden="true"></i></span> Technology</li></NavLink>
        
     
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

      {isLoggedIn &&  Loggeduserinfo.data &&
      <div className="Profile_div">
        <p className="Profile_tag">Profile</p>

        <div className="userpic">
         <img className="dummyuser_pic" src="https://th.bing.com/th/id/OIP.KopsrvStiUZsJd84_gQgTAHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"></img> 
         <p className="Name_tag"> <span>{Loggeduserinfo.data.firstname}   {Loggeduserinfo.data.lastname}</span></p>
         <p className="Email_tag"><span>{Loggeduserinfo.data.email}</span></p>
        </div>

        <div className="Profile_Bottom_DIV">
          <div className="Profile_Bottom_SubDiv">
           <span><img src="https://cdn-icons-png.flaticon.com/128/2550/2550223.png"></img></span> <p>Favorites</p>
          </div>
          <div className="Profile_Bottom_SubDiv">
           <span><img src="https://cdn-icons-png.flaticon.com/128/7327/7327006.png"></img></span> <p>Recently Played</p>
          </div>
          <div className="Profile_Bottom_SubDiv">
            <span><img src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png"></img></span> <p>Logout</p>
          </div>
          <div className="Profile_Bottom_SubDiv">
            <span> <img src="https://cdn-icons-png.flaticon.com/128/9465/9465815.png"></img></span> <p>Help</p>
          </div>
          <div className="Profile_Bottom_SubDiv">
            <span><img src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png"></img></span> <p>Settings</p>
          </div>
        </div>

      </div>
      }

              
      </div>
      {isLogin?<div className="black_bg" onClick={()=>{
        closeProfile()
      }}></div>:null}

    </>
  );
};
export default NavlinkPage;
