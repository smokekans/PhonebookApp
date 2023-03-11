import { List } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsThunks';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List sx={{ width: 1 }}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
