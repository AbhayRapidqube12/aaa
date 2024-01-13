
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import './App.css';
import Profile from "./Components/Profile";
import NavlinkPage from './Components/Navbar';
import FirstSlide from './Components/FirstSlide';
// import LoginComponent from "./Components/Login"
import SignupComponent from "./Components/Signup"
import LeadBordComponent from "./Components/Leadbord"
import HomeComponent from './Components/Home';
import QuizApp from'./Components/Quizquestion';
import PrivateRoute from "./Routes/PrivateRoute";
import adminpagecomponent from "./Admin/Adminpage";
import History_Quizqestion from "./Quizqestion/History";
import TakeQuiz from "./Quizqestion/Take-Quiz";
import Recently_played from "./Components/Recentlyplayed";
import Maths_Quizqestion from "./Quizqestion/Maths";
import Movies_Quizqestion from "./Quizqestion/Movies";
import Science_Quizqestion from "./Quizqestion/Science";
import Technology_Quizqestion from "./Quizqestion/Technology";
import Sports_Quizqestion from "./Quizqestion/Sports";
import Gk_Quizqestion from "./Quizqestion/Gk";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<FirstSlide/>}/>
            <Route path='Navlink' element={<NavlinkPage />}/>
            {/* <Route path='Login' element={<LoginComponent />}/> */}
            <Route path='Signup' element={<SignupComponent/>}/>
            <Route path='Leadbord' element={<LeadBordComponent/>}/>
            <Route path='Home' element={<HomeComponent />}/>
            {/* <Route path='Profile' element={<Profile />}/> */}
            <Route path="/quizQuestion" element={<QuizApp />}/>
            <Route path="history_quizes" element={<History_Quizqestion />}/>
            <Route path="/Adminhome" element={<adminpagecomponent />}/>
            <Route path="/Quizpage" element={<TakeQuiz />}/>
            <Route path="/Recently/played" element={<Recently_played />}/>
            <Route path="/Sport_quizes" element={<Sports_Quizqestion />}/>
            <Route path="/Science_quizes" element={<Science_Quizqestion />}/>
            <Route path="/Math_quizes" element={<Maths_Quizqestion />}/>
            <Route path="/Movie_quizes" element={<Movies_Quizqestion />}/>
            <Route path="/Tech_quizes" element={<Technology_Quizqestion />}/>
            <Route path="/Gk_quizes" element={<Gk_Quizqestion />}/>
            <Route 
            path="/Profile"
            element={ <PrivateRoute Component={Profile}  /> }   />
          </Routes>
      </Router>
    </div>
  );
}


export default App;
