import PropTypes from 'prop-types';
import React from 'react';

import {
  ContactListStyled,
  ContactItemStyled,
  ContactInfoStyled,
  ContactButton,
} from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactItemStyled key={contact.id}>
          <ContactInfoStyled>{contact.name + ':'}</ContactInfoStyled>
          <ContactInfoStyled>{contact.number}</ContactInfoStyled>
          <ContactButton type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContactButton>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
