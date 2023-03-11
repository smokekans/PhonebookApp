import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function getContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function createContact(id) {
  const { data } = await axios.post('contacts', id);
  return data;
}

export async function deleteContactId(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}

export async function updateContact({ id, name, number }) {
  const { data } = await axios.patch(`/contacts/${id}`, { name, number });
  return data;
}
