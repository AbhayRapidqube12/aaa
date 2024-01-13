import React, { useEffect, useState } from "react";
import {Navigate,Link} from "react-router-dom"
import NavlinkPage from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { setCategory } from "../Components/Action";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Sports_Quizqestion = ()=>{
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
        <h2 className="Quiz_h2">Play Quiz on History</h2>
      </div>

    
      <div className="Quiz_cards_flex">
        <div className="QuizCatgory_1 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.WKmy_vm1n3tHlOsGnpjk3AAAAA?rs=1&pid=ImgDetMain" alt=""/>
        <div>
        <p>Topic: <span >Modern Era</span></p>
        <p>Question:<span>10</span></p>
         <button className="Takequiz"  onClick={() => handleCategory('History', 'Modern Era')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div> 
        </div>
        
        
        
        <div className="QuizCatgory_2 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.tvE344GM8uF9H0zyWVzpnQHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <p>Topic: <span >Medieval History</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'Medieval History')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_3 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.bvSsWLCyCRmRn7cjx8Hg1AHaDH?w=319&h=147&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <p>Topic: <span>World War</span></p>
        <p>Question: <span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'World Wars')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>
        
        <div className="QuizCatgory_4 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.LhpxGNUlbRSw1BncRnyK8QHaE0?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <p>Topic: <span>Ancient Civilizations</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'Ancient Civilizations')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_5 Quizcard">
        <img src="https://th.bing.com/th?id=OIP.sgK_l_vKanDZf7R1EEbNkQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt=""/>
        <p>Topic: <span >American History</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'American History')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_6 Quizcard">
        <img src="https://th.bing.com/th?id=OIP.vHoDBDEPHUmO9xDhJl_wYQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt=""/>
        <p>Topic: <span >Asian History</span></p>
        <p>Question: <span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'Asian History')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        
        <div className="QuizCatgory_7 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.JR4s-LpeJbrZ_8pRPWHoQQHaFj?w=199&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <p>Topic: <span >African History</span></p>
        <p>Question:<span>10</span></p>
        <button className="Takequiz" onClick={() => handleCategory('History', 'African History')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div>

        <div className="QuizCatgory_8 Quizcard">
        <img src="https://th.bing.com/th/id/OIP.NnM2Ht6hrFDBv4m2l6mFhAHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>
        <div>
        <p>Topic: <span >Middle Eastern History</span></p>
        <p>Question:<span>10</span></p>
        <i class="fa fa-star-o" aria-hidden="true"></i>
         <button className="Takequiz"  onClick={() => handleCategory('History', 'Middle Eastern History')}>Take Quiz</button> <button className="AddtoFav_button"><FontAwesomeIcon icon={faStar} className="starIcon" /></button>
        </div> 
        </div>
      </div>


</>)}

export default  Sports_Quizqestion