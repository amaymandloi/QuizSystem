import React from "react";
import axios from "axios";
import {Form,Button,Card} from 'react-bootstrap'
import Header from "./header";
import Model from "./Model";
import  { BrowserRouter as Redirect, Route,Routes } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

    let loggedIn=true

    if(token==null){
      loggedIn=false
    }

        this.state={
                Email:'',
                Password:'',
                error:'',
                loggedIn
        }
        this.Password = this.Password.bind(this);  
        this.Email = this.Email.bind(this);  
        this.login = this.login.bind(this);  
    }
    Email(event) {  
        this.setState({Email:event.target.value})
     }  
    Password(event) {  
        this.setState({Password:event.target.value})  
    }  
   
  login(event){
    event.preventDefault();

    axios({
        method:'POST',
        url:'http://localhost:8082/quizApp/userapi/authuser',
        data:{
            email:this.state.Email,
            password:this.state.Password
        }
        })
        .then(response=>{
            sessionStorage.setItem('token', response.token);
            if(response.data==="loggedIn"){
                this.setState({loggedIn:true})
            }
            console.log("res: ",response.data);
            console.log({response:'Login Successfull'});
            sessionStorage.setItem('email',this.state.Email);
            
            window.location="/Dashboard";
       })
       .catch((error)=>{
           this.setState({error:"Login failed!!! either UserName or Password is incorrect"})
              // console.log("---Login Failed---");
           });
       }
    
      
    render(){
        
        return(
          
            <div className="login_bg">
            <Model />
            
            <div  className="d-flex justify-content-center" >
             <Card border=""  style={{ width:'40rem',marginTop:'70px', opacity:"90%"}} className="text-center" >
                <h4 style={{background:"var(--menu-bg)",height:"45px", marginBottom:"5px", fontFamily:'cursive', color:"white"}}>Login</h4>
                <Card.Body className="shadow-lg mt-3">
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="text" onChange={this.Email} placeholder="Enter Email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" onChange={this.Password} placeholder="Enter Password"/> 
        </Form.Group>
        <Button onClick={this.login}>Login</Button><br></br> <br></br>  
        <Button value="cancel" style={{backgroundColor:"red", color:"white"}}>Cancel</Button>

        </Form><br></br>
        <Card> <Card.Body> <h5 style={{color:"red"}}>{this.state.error}</h5></Card.Body></Card> 
        </Card.Body>
        </Card>
        
        </div>
</div>
    );
    }
}
export default Login;