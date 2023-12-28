import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const TakeQuiz = () => {
  const category = useSelector((state) => state.Cat.category.category);
  const subcategoryy = useSelector((state) => state.Cat.category.subcategory);
const [Quizquestion,setQuizquestion] = useState([])
  const cat = {
    category,
    subcategoryy
  }

  useEffect(()=>{
    // axios.post('http://localhost:3001/Quiz_Question',cat)
    // .then((response)=>{
    //     console.log(response.data)
    //     setQuizquestion(response)
    // })
    // .catch(error=>{
    //     console.log(error,"error while posting category")
    // })
    console.log(cat)
  },[])

  console.log(Quizquestion)

  return (
    <>
    {/* //   <p>Category: {category}</p>
    //   <p>Subcategory: {subcategory}</p> */}
      <p>Take quiz dynamic page</p>
    </>
  );
};

export default TakeQuiz;
