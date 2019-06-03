import React , {Component} from "react";
import "../style/header.css"
import Input from "./input.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "./search.js";
import {Link} from 'react-router-dom';


class Header extends Component{
  fetchData =()=> {
    fetch("http://localhost:3030/")
    .then(response => response.json())
    .then( data => {
      console.log(data);
      this.setState({
        data: data})
      })
        .catch(error=> console.log(error));

      }
componentDidMount(){
  this.fetchData();

}

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
