import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContact } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsThunks';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Box, Typography } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        component="main"
        sx={{
          mb: 'auto',
          px: 4,
          py: 12,
          display: 'flex',
          alignItems: 'top',
        }}
      >
        <Box
          maxWidth="360px"
          sx={{
            mx: 4,
          }}
        >
          <Typography variant="h5" component="p">
            Fill to add a contact
          </Typography>
          <ContactForm />
        </Box>
        <Box
          sx={{
            mx: 4,
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component="p" sx={{ mx: 3 }}>
              Contacts
            </Typography>
            <Filter />
          </Box>
          {getContact.length !== 0 && <ContactList contacts={getContact} />}
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
