import React , {Component} from "react";
import "../style/header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
class Header extends Component{

render(){
return(
<div className="header">
<Navbar  bg="light" expand="lg" sticky="top" >
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Nav>
  <Nav.Link href="#home">Home</Nav.Link>
   <Nav.Link href="#link">sign in</Nav.Link>
   <Nav.Link href="#link">lang</Nav.Link>
   </
   Nav>
  </Navbar.Collapse>

</Navbar>

</div>

);



}


}





export default Header
