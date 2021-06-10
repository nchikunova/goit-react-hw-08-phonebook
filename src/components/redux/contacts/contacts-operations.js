import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContact,
  deleteContact,
};