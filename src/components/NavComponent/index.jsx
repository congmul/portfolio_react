import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './style.scss'
import Resume from "../../assets/resume/Resume_JehyunJung.pdf";

function NavComponent() {

  return (
    <Navbar className="myNavBar" variant="dark">
      <Navbar.Brand href="/">Jehyun Jung</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/project">Project</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href={Resume}>Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jehyun-jung-bb247813b/">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/congmul">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent;
