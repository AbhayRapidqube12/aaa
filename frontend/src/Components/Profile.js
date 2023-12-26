import React, { useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import NavlinkPage from './Navbar';
import axios from 'axios';
// import toast from 'react-hot-toast';
const Profile = ()=>{
  const Username = useSelector((state) => state.User.username);
  const [History, setHistory] = useState([]);
    useEffect(()=>{
      if (Username) {
        axios.get("http://localhost:3000/quiz-history")
            .then((response) => {
                const userHistory = response.data.filter((user) => user.user === Username);
                if (userHistory.length > 0) {
                    setHistory(userHistory);
                    console.log(userHistory);
                }
            })
            .catch((error) => {
                console.error("Error fetching quiz history:", error);
            });
    }
}, [Username]);

    
    return(
      <>
      <NavlinkPage />
      <h2>Hiiii {Username}</h2>
      <p>Quiz Played </p>
      <ul>
          {History.map((data, index) => (
              <li key={index}>
                  <p>quizCategory: {data.quizCategory}</p>
                  <p>score: {data.score}</p>
              </li>
          ))}
      </ul>
  </>
      
    )
}

export default Profile