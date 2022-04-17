import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container className="text-center">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="40px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home#home">Home</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="login">LogIn</Nav.Link>
            
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
