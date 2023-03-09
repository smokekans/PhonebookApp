export const getFilter = state => state.filter;

export const getContact = state => {
  return state.contacts.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};

export const getContacts = state => state.contacts.contacts.items;
