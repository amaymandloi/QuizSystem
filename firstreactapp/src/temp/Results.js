import React from "react";

import { Button, Card } from "react-bootstrap";
import DashboardHeader from "./DashboardHeader";

let score=sessionStorage.getItem('marks');
let email=sessionStorage.getItem('email');
let percentage=sessionStorage.getItem('percentage');
let quizId=sessionStorage.getItem('quizid');
let result=sessionStorage.getItem('result');
//let status=localStorage.getItem('status');
const Result = () => {
  return (
    <div>
      
      <DashboardHeader/>
      <Card style={{ width:'40rem',marginTop:'60px', marginLeft:'26%'}} >
        <Card.Body className="shadow-lg mt-7">
      <div style={{textAlign:"center"}}>
        
        <p>
          <b className="b" style={{fontSize:"27px"}}>Quiz Result </b>
        </p>
        <p>{email}</p>
        <div >
          <p style={{textAlign:"center"}}>
            Score:{score}
            <br></br>
            Percentage:{percentage}
            <br></br>
            QuizId:{quizId}
            <br></br>
            Result:{result}
            <br></br>
            Questions Attempted: 20
          </p> 
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
          </svg><br></br>
          <Button href="/" className="Home-btn">Home</Button>
        </div>     
      </div>
      </Card.Body>
      </Card>

    </div>
  
  );
};

export default Result;
