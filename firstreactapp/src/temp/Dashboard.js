import React, { Component } from 'react'; 
import DashboardHeader from './DashboardHeader';
import {
  Button
} from "react-bootstrap";
import { Card } from 'react-bootstrap';
import  { BrowserRouter as Redirect } from 'react-router-dom';
import axios from 'axios';


let email=sessionStorage.getItem('email');
class Dashboard extends Component {  
  constructor(){
    super()
    this.state={
      email:'',
      User:[]
    }

  this.loadquiz=this.loadquiz.bind(this);
  }

  loadquiz(){
        window.location="/RetrieveQuestions";
}

SelectRedirect(){
 

  switch(document.getElementById('s1').value)
  {
  case "CoreJava":
  window.location="../RetrieveQuestions";
  break;
  
  case "Spring":
  window.location="../SpringQuestions";
  break;
  

  default:
  window.location="../"; 
  break;
  }
  }





  componentDidMount(){
    this.setState({email:this.state.email})
    console.log("email",email);
    axios({
      method:'GET',
      url:'http://localhost:8082/quizApp/userapi/userByEmail',
      params:{
        email:{email}
      }
      })
    
    .then(response=>{
      this.setState({User:response.data});
      console.log("User:",response);
    })
    .catch(console.log);
    }
 render(){  
 
return (  
    <div class='dash'>
    <DashboardHeader/>
    
    <div >
        <Card style={{ width:'50rem', marginTop:'5%', marginLeft:'22%'}}>
       <Card.Body className="shadow-lg mt-20">
      <p style={{textAlign:"center"}}>{email}
      <br></br></p>
            <div style={{textAlign:"center"}}>
              <h1 class='dashboard' style={{ fontFamily:'cursive'}}>Welcome to the Quiz</h1>
              <h2 style={{ fontFamily:'cursive'}}>Please select the topic of the test:-</h2>
              <div>
                <select id="s1" NAME="section">
                <option value="">Select</option>
                <option value="CoreJava">Core Java</option>
                <option value="Spring">Spring</option>
            </select><br></br><br></br>
              <Button onClick={this.SelectRedirect}>Submit</Button><br></br><br></br>
              <button type="cancel" class="cancelbtn">Cancel</button>
            </div>
            </div>
            </Card.Body>
           </Card>
    </div>
  </div>
        );  
    }  
    }
  
export default Dashboard;  