import React, { useEffect, useState } from "react";
import {Navigate,Link} from "react-router-dom"
import NavlinkPage from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { setCategory } from "../Components/Action";
import toast from "react-hot-toast";


const History_Quizqestion = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{

    },[])

    const handleCategory = (category) => {
          navigate('/quizQuestion')
          dispatch(setCategory(category));
        }
      






    return(
<>
     <NavlinkPage />
     <div className="Quiz_Heding">
        <h2 className="Quiz_h2"> Select A Quiz category</h2>
      </div>

    
      <div className="Quiz_cards_flex">
        <div className="QuizCatgory_1 Quizcard">
        <img src="https://wallpaperaccess.com/full/3570860.jpg" alt=""/>
        <div>
        <p>Category:<span >History</span></p>
        <p>Question:<span>10</span></p>
         <button className="Takequiz" onClick={()=>handleCategory('Modern Era')}>Take Quiz</button>
        </div> 
        </div>
        

        <div className="QuizCatgory_2 Quizcard">
        <img src="https://static.vecteezy.com/system/resources/previews/001/249/465/original/cute-science-lettering-and-laboratory-icons-banner-template-vector.jpg" alt=""/>
        <p>Category:<span>Science</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={()=>handleCategory('Medieval History')}>Take Quiz</button>
        </div>

        <div className="QuizCatgory_3 Quizcard">
        <img src="https://images6.alphacoders.com/455/thumb-1920-455565.png" alt=""/>
        <p>Category:<span>Maths</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={()=>handleCategory('World Wars')}>Take Quiz</button>
        </div>

        <div className="QuizCatgory_3 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.bjjP2ttvXSi6vCpTugRXnwHaLH?pid=ImgDet&w=474&h=711&rs=1" alt=""/>
        <p>Category:<span>Ggeneral knowledge</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={()=>handleCategory('Ancient Civilizations')}>Take Quiz</button>
        </div>
      </div>


</>


    )}

export default  History_Quizqestion