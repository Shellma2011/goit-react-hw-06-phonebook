export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  console.log('getVisibleContacts filter', filter);
  console.log('getVisibleContacts contacts', contacts);
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};
