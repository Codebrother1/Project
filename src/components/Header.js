import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" varient="light" expand="lg" collapseOnSelect>
        <Container>
  <Navbar.Brand href="#home">Terrance</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
      <Link to="/"><i className="fas fa-user"></i>Login/Signup</Link>
      <Link to="/main"><i className="fas fa-home"></i>Main</Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container> 
</Navbar>
  </header>
  )
}
const mapStateToProps = state => state;

export default Header
