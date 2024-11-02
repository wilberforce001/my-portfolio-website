// NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/styles.css';

const NavigationBar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);
    return () => window.removeEventListener('scroll', changeNavbarBackground);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${navbarBg ? 'navbar-bg-dark fixed-top' : 'navbar-center'}`}
    >
      <Navbar.Brand href="#home" className="text-light"></Navbar.Brand>
      <Nav className="ml-auto flex-row text-center">
        <Nav.Link href="#about" className="text-light">About</Nav.Link>
        <Nav.Link href="#skills" className="text-light">Skills</Nav.Link>
        <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
        <Nav.Link href="#testimonials" className="text-light">Testimonials</Nav.Link>
        <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
