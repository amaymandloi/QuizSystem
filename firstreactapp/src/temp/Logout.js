import React, { Component } from 'react'

export default class Logout extends Component {
   

  logout = () => {
    sessionStorage.removeItem("email");
    
    window.location="/login";
  };

  render(){
    return(
    <button onClick={this.logout}>Logout</button>
    );
    }
}