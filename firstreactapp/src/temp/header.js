import React, { Component } from 'react';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
import './Home.css';
class Header extends React.Component {
    render() { 
        return <div>
              
  <Navbar >
    <Container className='container'>
    <Nav>
      <Nav.Link  href="#Login" className="bar"  style={{color:'lightblue', fontSize:'20px', fontFamily:'cursive'}} >Login</Nav.Link>
      <Nav.Link href="#Register" className="bar" style={{color:'lightblue',fontSize:'20px', fontFamily:'cursive'}} >Register</Nav.Link>
      <Nav.Link href="#Contact" className="bar" style={{color:'lightblue',fontSize:'20px', fontFamily:'cursive'}} >ContactUs</Nav.Link>
      <Nav.Link href="#About" className="bar" style={{color:'lightblue',fontSize:'20px', fontFamily:'cursive'}} >AboutUs</Nav.Link>  
    </Nav>
    </Container>
  </Navbar>
         </div>;
         }
}
export default Header;
