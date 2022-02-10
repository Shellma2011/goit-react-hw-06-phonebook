// // export const getTodos = state => state.todos.items;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  console.log('getVisibleContacts contacts', contacts);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

// import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-actions';
// import ContactList from '../../components/ContactList/ContactList';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   todos: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(contactsActions.deleteContacts(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
