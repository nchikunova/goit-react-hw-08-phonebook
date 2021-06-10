import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Form from 'react-bootstrap/Form';

const Filter = ({ value, onChange }) => (
  <Form className="mb-2">
    <Form.Group controlId="formBasicSearch">
      <Form.Control
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </Form.Group>
  </Form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
 value: contactsSelectors.getFilter(state),});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);