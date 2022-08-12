import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

import { Home as HomeIcon } from 'react-feather';

import './CustomNavbar.css';
import React from 'react';

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  render() {
    let out = this.state.isCollapsed;
    console.log(out);
    return (
      <>
        <Navbar expand="lg" variant='dark' className={out ? "fixed-top navBg" : "fixed-top"}>
          <Container>
            <Navbar.Brand as={Link} to="/" >
              <HomeIcon color="rgb(192, 192, 192)" size={30}/>
            </Navbar.Brand>
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              onClick={() => this.setState({
                                isCollapsed: !this.state.isCollapsed
                              })}/>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/contacts" >Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section>
          <Outlet></Outlet>
        </section>
      </>
    )
  };

  setNavExpanded() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }  
}

export default CustomNavbar;