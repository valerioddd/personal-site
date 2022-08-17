import './CustomNavbar.css';
import React, { useState } from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faBars  } from '@fortawesome/free-solid-svg-icons'

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expand="lg" variant='light' 
        className={expanded==="expanded" ? "fixed-top navBg" : "fixed-top"}
        expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <FontAwesomeIcon icon={faHouseChimney} size="lg"/>
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded") }>
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/projects" >Projects</Nav.Link>
              <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/contacts" >Contacts</Nav.Link>
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