import React from "react";
import {Navbar , Nav , Container} from "react-bootstrap";
import './Navs.css'
import logo from '../../assets/logo.png'

const Navs=()=>{
    return(
        <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src= {logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="m-auto">
            <Nav.Link href="#home" className="link">Home</Nav.Link>
            <Nav.Link href="#link" className="link">About Us</Nav.Link>
            <Nav.Link href="#home" className="link">Explore Food</Nav.Link>
            <Nav.Link href="#link"className="link">Review</Nav.Link>
            <Nav.Link href="#link"className="link">FAQ</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link className="link" id="lastnav">772913602</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs;