import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <ListGroup.Item style={{ marginBottom: "10px"}}>
    <Row>
      <Col style ={{marginTop: "auto", marginBottom: "auto"}}>
    <span style={{marginRight: "10px"}}>{name}</span> <span>{number}</span>
      </Col>
      <Col lg="2">
        <Button
          variant="outline-info"
      type="button"
      onClick={() => onDeleteContact(id)}
    >
        Delete
    </Button>
      </Col>
   
      </Row>
  </ListGroup.Item>
);

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
