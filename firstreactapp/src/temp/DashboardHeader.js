import React, { Component } from "react";
import {Navbar,Container,Nav, NavLink} from 'react-bootstrap'

class DashboardHeader extends Component {
  
  logout = () => {
    sessionStorage.clear();
    window.sessionStorage.clear();
    window.location="/";
  };

  render() { 
      return <div> 
        <nav class="navbar navbar-expand-lg" style={{position:"fixed"}}>
        <div class="container">
            <a class="navbar-brand" href="/">
              <i class="fa fa-pencil-square-o"  ></i>
               Quiz
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/Dashboard" class="nav-link smoothScroll" ><i class="fa fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a href="/UpdateProfile" class="nav-link smoothScroll"><i class="fa fa-user-plus"></i> Update Profile</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link smoothScroll" onClick={this.logout}><i class="fa fa-sign-out" ></i> Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
         </div>;
    }
}
export default DashboardHeader;
