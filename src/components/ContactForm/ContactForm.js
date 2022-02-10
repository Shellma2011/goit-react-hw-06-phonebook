// import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
// import actions from '../../redux/contacts/contacts-actions';
// import { getContacts } from '../../redux/contacts/contacts-selectors';
import shortid from 'shortid';
// import toast, { Toaster } from 'react-hot-toast';

import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookButton,
} from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [contacts, setContacts] = useState([]);
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  // const handleChangeName = e => setName(e.target.value);
  // const handleChangeNumber = e => setNumber(e.target.value);

  //---------------------------------------------
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

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      return alert(`${name} is already in contacts!`);
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   console.log(newContact);
  //   if (
  //     contacts.find(
  //       contact =>
  //         contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase() ||
  //         contact.number === newContact.number,
  //     )
  //   ) {
  //     return toast.success(`${newContact.name} is already in contacts!`);
  //   } else {
  //     return setContacts(contacts => [newContact, ...contacts]);
  //   }
  // };

  // const handleOnSubmit = e => {
  //   e.preventDefault();
  //   if (name === '') {
  //     return toast.success(`${name} is already in contacts!`);
  //   }

  //   dispatch(contactsActions.addContact(name));
  //   // onSave();
  //   setName('');

  //   // onSubmit({ name, number });
  //   // setName('');
  //   // setNumber('');
  // };

  // const addContact = ({ name, number }) => {
  //   // const newContact = {
  //   //   id: shortid.generate(),
  //   //   name,
  //   //   number,
  //   // };
  //   // console.log(newContact);
  //   if (
  //     contacts.find(
  //       contact =>
  //         contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
  //         contact.number === number,
  //     )
  //   ) {
  //     return toast.success(`${name} is already in contacts!`);
  //   } else {
  //     return dispatch(actions.addContact(name, number));
  //   }
  // };

  return (
    <>
      <PhonebookForm onSubmit={handleSubmit}>
        {/* <Toaster /> */}
        <PhonebookLabel htmlFor={nameInputId}>
          {/* <PhonebookLabel> */}
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
          {/* <PhonebookLabel> */} Number
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
    </>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit:(name, number)=>dispatch(contactsActions.addContact(name, number))
// })

// export default connect(mapDispatchToProps)(ContactForm)
