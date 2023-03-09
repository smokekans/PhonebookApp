import axios from 'axios';

axios.defaults.baseURL = 'https://6405afbceed195a99f896919.mockapi.io/';

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
