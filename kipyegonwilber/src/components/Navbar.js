import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/styles.css';

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // User is scrolling down
      setShowNavbar(false);
    } else {
      // User is scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // lastScrollY is a dependency here

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // handleScroll is added as a dependency

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`} 
    >
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
