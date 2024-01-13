import React, { useEffect, useState } from "react";
import {Navigate,Link} from "react-router-dom"
import NavlinkPage from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { setCategory } from "../Components/Action";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Maths_Quizqestion = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{

    },[])

    const handleCategory = (category,subcategory) => {
         dispatch(setCategory({category,subcategory}));
          // navigate('/Quizpage')
          navigate('/quizQuestion')
        
        }
      
    return(
<>
     <NavlinkPage />
     <div className="Quiz_Heding">
        <h2 className="Quiz_h2">Play Quiz on Maths</h2>
      </div>

    
      <div className="Quiz_cards_flex">
        <div className="QuizCatgory_1 Quizcard">
        <img src="https://th.bing.com/th?id=OIP.tc7HAJTY6HSb_29zuyC-fAHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt=""/>
        <div>
        <p>Topic: <span >Algebra</span></p>
        <p>Question:<span>10</span></p>
         <button className="Takequiz"  onClick={() => handleCategory('Maths', 'Algebra')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div> 
        </div>
        
        
        
        <div className="QuizCatgory_2 Quizcard">
        <img src="https://blog-talkingchalks.azurewebsites.net/content/images/2020/11/Copy-of-Geometry-1.jpg" alt=""/>
        <p>Topic: <span >Gemotry</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Gemotry')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_3 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.bvSsWLCyCRmRn7cjx8Hg1AHaDH?w=319&h=147&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <p>Topic: <span>Discrete Mathematics</span></p>
        <p>Question: <span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Discrete Mathematics')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>
        
        <div className="QuizCatgory_4 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.ZOZ47YZwIKi5Mi4jdcc7GQHaFj?rs=1&pid=ImgDetMain" alt=""/>
        <p>Topic: <span>Number Theory</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Number Theory')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_5 Quizcard">
        <img src="https://wallpapercave.com/wp/wp3098986.jpg" alt=""/>
        <p>Topic: <span >Statistics</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Statistics')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_6 Quizcard">
        <img src="https://th.bing.com/th/id/R.f0e335efcb8ce8c21aba39eda602ae27?rik=P9dZN9Ujzx4r6Q&riu=http%3a%2f%2fi.stack.imgur.com%2fs3ybv.png&ehk=bVu4jt%2bxObfrunFHu5AWhy5e3SFuW1tNXY03A9FmxT4%3d&risl=&pid=ImgRaw&r=0" alt=""/>
        <p>Topic: <span>Trigonometry</span></p>
        <p>Question: <span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Trigonometry')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        
        <div className="QuizCatgory_7 Quizcard">
        <img src="https://i.pinimg.com/originals/28/77/27/287727b33133b3b045da0c30f1b83c86.jpg" alt=""/>
        <p>Topic: <span>Linear Algebra</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('Maths', 'Linear Algebra')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_8 Quizcard">
        <img src="https://wallpaperaccess.com/full/2871019.jpg" alt=""/>
        <div>
        <p>Topic: <span>Calculus</span></p>
        <p>Question:<span>10</span></p>
        <i class="fa fa-star-o" aria-hidden="true"></i>
         <button className="Takequiz"  onClick={() => handleCategory('Maths', 'Calculus')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div> 
        </div>
      </div>


</>


    )}

export default  Maths_Quizqestion