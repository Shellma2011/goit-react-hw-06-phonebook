import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm onSubmit={handleOnSubmit}>
      <PhonebookLabel htmlFor={nameInputId}>
        Name
        <PhonebookInput
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel htmlFor={telInputId}>
        Number
        <PhonebookInput
          id={telInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookButton type="submit">Add contact</PhonebookButton>
    </PhonebookForm>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
