import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const AuthNav = () => (
  <Nav>
    <NavLink to="/register" exact className="nav-link">
      Registration
    </NavLink>
    <NavLink to="/login" exact className="nav-link">
      Login
    </NavLink>
  </Nav>
);

export default AuthNav;