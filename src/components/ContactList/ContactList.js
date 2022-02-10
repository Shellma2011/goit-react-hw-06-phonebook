import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import {
  ContactListStyled,
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
} from './ContactList.styled';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <ContactInfoStyled>{name + ':'}</ContactInfoStyled>
          <ContactInfoStyled>{number}</ContactInfoStyled>
          <ContactButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactButton>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
