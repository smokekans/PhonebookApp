export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const isLoadingContacts = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getContact = state => {
  return state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};
