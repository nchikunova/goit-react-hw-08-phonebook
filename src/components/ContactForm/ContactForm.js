import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import { v4 as uniqueId } from 'uuid';
import { toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  loginInputNameId = uniqueId(); 
  loginInputNumberId = uniqueId(); 

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts } = this.props;
    const { name, number } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      toast.info(`${name} is already in contacts`);
    } else {
      this.props.onSubmit(name, number);
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
       <Form   onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id = {this.loginInputNameId}
            placeholder="Annie Copeland"
            value={name}
            onChange={this.handleChange}
          />
           </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Phone</InputGroup.Text>
          </InputGroup.Prepend>       
          <Form.Control
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id = {this.loginInputNumberId}
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          />
        </InputGroup>
        <Button
          variant="outline-info"
          type="submit"
          disabled={name === '' || number === ''}
        >
          Save contact
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => {
    return dispatch(contactsOperations.addContact(name, number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
