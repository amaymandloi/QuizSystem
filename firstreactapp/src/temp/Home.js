import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Login from "./Login";
import { Link } from 'react-router-dom';
class Home extends React.Component{
    render(){
    
        return(
        <div >  
        <div class="bg-img">                  
        <div class="row mt20">
        <div class="col-md-6 offset-md-3 text-center">
        <h1 class="h1" style={{ fontFamily:'cursive'}}>Welcome to Quiz Application</h1>
      </div>
    </div>
  </div >

  </div>
    
        );
        
    }
}
export default Home;