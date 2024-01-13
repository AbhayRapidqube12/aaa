import React, { useState } from "react";
import axios from "axios";
import "../Css/sForm.css"
import { useNavigate } from "react-router-dom";
import NavlinkPage from "./Navbar";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
    password: "",
    confirmPassword: "",
  });
  const passwordPattern = /^(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?\/\\~-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
  const navigate = useNavigate()
  const [error, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    let isvalid = true;
    let validationerros = {};
    if (formData.firstname === "" || formData.firstname == null) {
      isvalid = false;
      validationerros.firstname = "First name is required";
    }
    if (formData.lastname === "" || formData.lastname === null) {
      isvalid = false;
      validationerros.lastname = "Last name is required";
    }
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationerros.email = "Email is required";
    }else {
      const domainCheck = /@gmail\.com$/;
      if (!domainCheck.test(formData.email)) {
        isvalid = false;
        validationerros.email = "Email must belong to gmail.com domain";
      }
    }
    
 
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationerros.password = "password  is required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationerros.password = "password length should be atleat 8characters";
    }else if (!passwordPattern.test(formData.password)) {
      isvalid = false;
      validationerros.password =
        "Password should contain at least one special character, one number, and one uppercase letter";
    }

      
    if (formData.confirmPassword !== formData.password) {
      isvalid = false;
      validationerros.confirmPassword = "password  not matched";
    }
    setErrors(validationerros);
    setValid(isvalid);

    if (Object.keys(validationerros).length == 0) {
      toast.success("Account Created Successfully!")
      axios
        .post("http://localhost:3001/Add_user", formData)
        // .then((navigate('/home')))
        .then((response)  =>  {
          if (response.data.status === 0) {
            alert(response.data.message);
          } else {
            toast.success("Account Created Successfully!");
            navigate("/home"); // Move this line to execute after the toast message
          }
        })
        .catch((err) => console.log(err, "err while posting"));
    }
  };

  return (
    <>
    {<NavlinkPage/>}
    <form className="form-containerr centered-form" onSubmit={handleSubmit}>
      <h4 className="Signup_heding">Signup</h4>
    <div className="input-group">
        <label className="label">
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          
        </label>
        {error.firstname && <span className="error">{error.firstname}</span>}
      </div>
      <div className="input-group">
        <label className="label">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          
        </label>
        {error.lastname && <span className="error">{error.lastname}</span>}
      </div>
      <div className="input-group">
        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {error.email && <span className="error">{error.email}</span>}
      </div>
      <div className="input-group">
        <label className="label">
          Mobile No.:
          <input
            type="number"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
          />
        </label>
        {error.email && <span className="error">{error.email}</span>}
      </div>
   
      <div className="input-group">
        <label className="label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          
        </label>
        {error.password && <span className="error">{error.password}</span>}
      </div>
      <div className="input-group">
        <label className="label">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          
        </label>
        {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
      </div>
      <button type="submit" className="Login">Submit</button>
      <p className="Alredyac"> Already have a Account ? <span className="RegisterNav" onClick={()=>{navigate('/Login')}} style={{color:"blue"}}> Login here</span></p>

    </form>
    </>
  );
};

export default Form;
