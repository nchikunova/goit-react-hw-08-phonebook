import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const HomeView = () => (
  <Container className="pt-4 text-center">
    <h2 className="mb-5">Welcome</h2>
    <p className="h5 mb-3">You can store your contacts with phone numbers here</p>
    <p className="h5">
      To use this app, you must to <NavLink to="/login">Login</NavLink> or{' '}
      <NavLink to="/register">Register</NavLink>
    </p>
  </Container>
);

export default HomeView;