import React from 'react';
import {Form,Button,Card} from 'react-bootstrap'
import axios from 'axios';
import './Home.css';
import Header from './header';
import Model from './Model';
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validPasswordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,25}$/
      );
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            User:{
                firstName:'',
                lastName:'',
                email:'',
                password:''
            },
            errors:{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },
        disabled:true,
        res:'',
        status:''
        }
    }
changeHandler=(event)=>{
          let User={...this.state.User};
          User[event.target.name]=event.target.value;
          this.setState({User});
          let errors=this.state.errors;
          const{name,value}=event.target;
          
          switch(name){
             case 'password': 
             errors.password=
             validPasswordRegex.test(value)   
             ?''
             :'password length must be greater than 8 and less than 25, password must contain at least 1 small letter, 1 CAPITAL letter, 1 numeric value and 1 special character';
             break;

             case 'firstName':
             errors.firstName=value.length< 3  
             ?'First Name should have minimum 3 characters' 
             :'';
             break;

             case 'lastName':
             errors.lastName=value.length<=0 
             ?'last name cannot be blank' 
             :'';
             break;

             case 'email':
             errors.email=
             validEmailRegex.test(value) 
             ? ''
             :'Email id is not Valid';
             break;
             default:
             break;
          }

          this.setState({errors,[name]:value},()=>{
              
          })

          const validationForm=(errors=>{
              let valid=true;
              Object.values(errors).forEach(
                 (val)=> val.length>0 && (valid=false)
              )
              return valid;
          })

          if(validationForm(this.state.errors)){
              this.state.disabled=false;
          }else{
                
              this.state.disabled=true;
          }
     }
 sendData=(event)=>{
     event.preventDefault();
  console.log(this.state.User);
   
     axios({
     method:'POST',
     url:'http://localhost:8082/quizApp/userapi/postUser',
     data:{
         firstName:this.state.User.firstName,
         lastName:this.state.User.lastName,
         email:this.state.User.email,
         password:this.state.User.password
     }
     })
     .then(status=>{
       this.setState({status:'User Successfully Registered'})
    })
        .catch((error)=>{
            this.setState({res:error.response.data.userError.errorMessage});
        });
    }    
    // window.location="/Login"

    render(){
        return(
            <div className='register_bg'>
            <Model/>
          
            <div className="d-flex justify-content-center "> 
            <Card style={{ width: '40rem', marginTop:'30px'}} className="text-center" >
                <h3 style={{background:"var(--menu-bg)",height:"45px", marginBottom:"5px", fontFamily:'cursive', color:"white"}}>Register</h3>
            <Card.Body  className="shadow-lg mt-3">
            <Form onClick={this.sendData}>
            <Form.Group >
                <Form.Control placeholder='Enter FirstName' type="text" name="firstName" value={this.state.User.firstName} onChange={this.changeHandler}/>
                {this.state.errors.firstName.length > 0 && 
                <span style={{color:'red'}}>{this.state.errors.firstName}</span>}
                </Form.Group><br></br>
            <Form.Group >
            <Form.Control placeholder='Enter LastName' type="text" name="lastName" value={this.state.User.lastName} onChange={this.changeHandler}/>
            {this.state.errors.lastName.length > 0 && 
                <span style={{color:'red'}}>{this.state.errors.lastName}</span>}
            </Form.Group>  <br></br>

            <Form.Group >
            <Form.Control placeholder='Enter Email' type="text" name="email" value={this.state.User.email} onChange={this.changeHandler}/>
            {this.state.errors.email.length > 0 && 
                <span style={{color:'red'}}>{this.state.errors.email}</span>}
            </Form.Group><br></br>
           
            <Form.Group  >
            <Form.Control placeholder='Enter Password' type="password" name="password" value={this.state.User.password} onChange={this.changeHandler}/>
            {this.state.errors.password.length > 0 && 
                <p style={{color:'red'}}>{this.state.errors.password}</p>}
            </Form.Group><br></br>

            <Button disabled={this.state.disabled} >Register</Button><br></br>
        
            </Form>
               <Card> <Card.Body> <h3 >{this.state.status}</h3></Card.Body></Card> 
               
            </Card.Body>
            </Card>
            </div>
            </div>
        );
    }
}
export default Register;