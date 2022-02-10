import shortid from 'shortid';
// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
