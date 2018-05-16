import React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const navbar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">JBFloor Inc</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/about">
          About
        </NavItem>
        <NavItem eventKey={3} href="/photo">
          Photo
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/floor">
          Floor
        </NavItem>
        <NavItem eventKey={2} href="/contact">
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
