import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/Contact';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeView = () => (
  <Container className="pt-4">
    <Row>
      <Col lg={5}>
        <ContactForm />
      </Col>
      <Col lg="7">
        <ContactsList/>
      </Col>
    </Row>
  </Container>
);

export default HomeView;