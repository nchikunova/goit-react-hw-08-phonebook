import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Filter from '../Filter';
import ListGroup from 'react-bootstrap/ListGroup';



class ContactsList extends Component {

  static propTypes = {

  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};

 componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
    <>
      <Filter/>
      {this.props.isLoading && <h1>Phonebook is loading...</h1>}
        <ListGroup>
        {this.props.contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={this.props.onDeleteContact}
          />
      ))}
        </ListGroup>
    </>
    );
  }
}

const mapStateToProps = state => {
  return {
     contacts: contactsSelectors.getFilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);