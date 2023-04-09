import React from "react";
import {Form,Button,Card} from 'react-bootstrap'
import axios from 'axios';
import DashboardHeader from './DashboardHeader';
import Model from './Model';

const validPasswordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,25}$/
      );
class UpdateProfile extends React.Component{
    constructor(){
        super();
        this.state={
            User:{
                 email:'',
                 password:''
                 
            },
         errors:{
         password:'',
       
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
             :'password length must be greater than 8 and less than 25, password must contain at least 1 small letter, 1 CAPITAL letter, 1 numeric value and 1 speical character';
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

updateData=(event)=>{
    event.preventDefault();
    axios({
        method:'PATCH',
        url:'http://localhost:8082/quizApp/userapi/userpass',
        data:{
            email:sessionStorage.getItem('email'),
            password:this.state.User.password,
            
        }
        })
        .then(res=>{
            this.setState({status:'Password Updated'})
            console.log('Password Updated',res.data);     
            //window.location="/Dashboard";
       })
       .catch((error)=>{
        this.setState({res:error.response.data});
              
           });
       }

    render(){
        let email=sessionStorage.getItem('email');
        return(
           
            <div> 
            <Model/>
            <DashboardHeader/>
            <p style={{textAlign:'center', marginTop:'10px'}}>{email}</p>
            <div className="d-flex justify-content-center " > 
            <Card style={{ width: '40rem', marginTop:'70px'}} className="text-center" >
                <h3 style={{background:"var(--menu-bg)",fontFamily:'cursive',height:"45px", marginBottom:"5px", color:'steelblue',color:"white"}}>Update Password</h3>
            <Card.Body  className="shadow-lg mt-3">
            <Form onSubmit={this.updateData}>

            <Form.Group>
            <Form.Control placeholder='Enter Password' type="password" name="password" value={this.state.User.password} onChange={this.changeHandler}/>
            {this.state.errors.password.length > 0 && 
                <p style={{color:'red'}}>{this.state.errors.password}</p>}
            </Form.Group><br></br>

         


            <button disabled={this.state.disabled}>Update</button><br></br>
            </Form>
               <Card> <Card.Body> <h5>{this.state.status}</h5></Card.Body></Card> 
            </Card.Body>
            </Card>
            </div>
            </div>
        );
    }
}
export default UpdateProfile;