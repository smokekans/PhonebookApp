import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  deleteContactId,
} from 'services/APIContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await createContact(contact);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContactId(id);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
