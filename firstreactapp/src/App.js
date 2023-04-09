import './App.css';
import Home from './temp/Home';
import Login from './temp/Login';
import Register from './temp/Register';
import Contact from './temp/Contact';
import About from './temp/About';
import Dashboard from './temp/Dashboard';
import Header from './temp/header';
import RetrieveQuestions from './temp/RetrieveQuestions';
import Results from './temp/Results';
import QuizPage from './temp/Quizpage';
import UpdateProfile from './temp/UpdateProfile';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  { BrowserRouter as Redirect } from 'react-router-dom';
import Countdowntimer from './temp/Countdowntimer';
import Logout from './temp/Logout';
import Main from "./temp/Main";
import SpringQuestions from "./temp/SpringQuestions";
function App() {
  return (
                    <Router>
                      <Routes>
                        <Route path="/" element={<div><Header/><Main/></div>}/>
                        <Route path="/Register" element={<Register/>}/>
                        <Route path="/Login/*" element={<Login/>}/>
                        <Route path="/Dashboard" element={<Dashboard/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/RetrieveQuestions" element={<RetrieveQuestions/>}/>
                        <Route path="/Results" element={<Results/>}/>
                        <Route path="/Quizpage" element={<QuizPage/>}/>
                        <Route path="/Logout" element={<Logout/>}/>
                        <Route path="/UpdateProfile" element={<UpdateProfile/>}/>
                        <Route path="/Countdowntimer" element={<Countdowntimer/>}/>
                        
                      <Route path="/SpringQuestions" element={<SpringQuestions/>}/>
                      </Routes>
                    </Router>  
  );
}

export default App;
