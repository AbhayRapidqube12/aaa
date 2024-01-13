import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import { useSelector } from 'react-redux';
import "../Css/Recentlyplayed.css"
import NavlinkPage from "./Navbar";
const Recently_played = ()=>{
    const Username = useSelector((state) => state.User.username);
    const [userhistory , setHistory] = useState([])
    const [preview , setPreview] = useState(false)
    const [questions, setQuestions] = useState([''])
    const formdata = {
        email:Username
    }
    useEffect(()=>{
        if(Username){
            axios.post('http://localhost:3001/user_history',formdata)
            .then((response)=>{
                console.log('Response of recently played quiz',response)
                setHistory(response.data.data)
            }).catch(error=>{
                console.log(error,"error in recently played ")
            })
        }
    },[])

    useEffect(()=>{
        console.log(preview)
    },[preview])
   
    const Showhistory = (data) => {
        setQuestions(data)
        setPreview(!preview); 
    };
 


    console.log(userhistory,"userhis")

    return(
        <>
        <NavlinkPage/>
        <h4 className='rcentplayed_Ptag'> Recently played quiz</h4>
        {userhistory &&
            <div>
                {userhistory.map((data,index)=>{
                    return(
                    <div className='Main_single_history' key={index}>
                        <h4 className='history_headtag' >Category: <span>{data.category}</span></h4>
                        <h5 className='history_headtag'>Quiz Played: <span>{data.subcategory}</span></h5>
                        <h5 className='history_headtag'>Score: <span>{data.score}</span></h5>
                        <button onClick={()=>{
                            Showhistory(data.questions)
                        }}>preview</button>
                     </div >
                     )
            })}
            </div>
        }

{questions &&
  <div className='Question_model'>
    <button onClick={() => {
      setQuestions('');
    }}>Close</button>
    {questions.map((question, qindex) => {
      const selectedAnswer = question.selectedanswer;
      const rightAnswer = question.answer;
      const backgroundColor = selectedAnswer === rightAnswer ? 'aquamarine' : 'red';

      return (
        <div className='question_div' key={qindex} >
          <h5 className='Sub_Question'>{qindex} Question: {question.question}</h5>
          <p className='Sub_Selected_Answer' style={{ backgroundColor }}>Selected Answer : {selectedAnswer || 'Not selected'}</p>
          <p className='Sub_Answer'>Right answer: {rightAnswer}</p>
        </div>
      );
    })}
  </div>
}
        </>
    )
}

export default Recently_played;