import './CustomNavbar.css';
import React, { useState } from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faBars  } from '@fortawesome/free-solid-svg-icons'

function CustomNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Navbar expand="lg" variant='light' className={isCollapsed ? "fixed-top navBg" : "fixed-top"}>
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <FontAwesomeIcon icon={faHouseChimney} size="lg"/>
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setIsCollapsed(!isCollapsed) }>
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/projects" >Projects</Nav.Link>
              <Nav.Link as={Link} to="/contacts" >Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default CustomNavbar;