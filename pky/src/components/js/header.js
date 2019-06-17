import React, { Component } from "react";
import "../style/header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";
// import Links from './links.js';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar expand="lg" sticky="top" className="navbar-transparent">
          <Container>
            <Navbar.Brand className="mr-lg-5" href="/">EVENTSin</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                  <Nav.Link href="/"><i className="fas fa-home"></i></Nav.Link>
                  <Nav.Link href="#link">Eng</Nav.Link>
                  <Nav.Link href="#link">Fin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      </div>
    );
  }
}

export default Header;
