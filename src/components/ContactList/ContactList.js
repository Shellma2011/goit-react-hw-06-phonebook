import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import {
  ContactListStyled,
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
} from './ContactList.styled';
// import Todo from '../Todo';
// import contact from './';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLocaleLowerCase();
//   return allContacts.filter(({ number }) => number.toLowerCase().includes(normalizeFilter));
// };

const ContactList = () => {
  // const contacts = useSelector(state =>
  //   getVisibleContacts(state.contacts.items, state.contacts.filter),
  // );
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  // console.log('ContactList contacts', contacts);
  // console.log('ContactList dispatch', dispatch);

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <ContactInfoStyled>{name + ':'}</ContactInfoStyled>
          <ContactInfoStyled>{number + ':'}</ContactInfoStyled>
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

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = {
//   onDeleteContact: id => dispatch(contactsActions.onDeleteContact(id)),
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
export default ContactList;
