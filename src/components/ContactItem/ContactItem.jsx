import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunks';
import { useState } from 'react';
import { isLoadingContacts } from 'redux/contacts/contactsSelectors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { Fab, ListItem, ListItemText } from '@mui/material';
import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';

export default function ContactItem({ id, number, name }) {
  const [isEdit, setIsEdit] = useState(false);
  const isContactsLoading = useSelector(isLoadingContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ListItem>
        <PhoneAndroidRoundedIcon
          color="primary"
          fontSize="large"
          sx={{ mr: 2 }}
        />
        {isEdit ? (
          <ContactEditForm
            id={id}
            initialValues={{ name, number }}
            onSubmit={() => setIsEdit(false)}
          />
        ) : (
          <ListItemText
            primary={name}
            secondary={number}
            sx={{ maxWidth: 320 }}
          />
        )}
        {!isEdit && (
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            sx={{ mr: 2, zIndex: 'auto' }}
          >
            <EditIcon onClick={() => setIsEdit(true)} />
          </Fab>
        )}
        <Fab
          aria-label="delete"
          size="small"
          sx={{ zIndex: 'auto', minWidth: '40px' }}
        >
          <DeleteIcon
            disabled={isContactsLoading}
            type="button"
            onClick={() => onDeleteContact(id)}
          />
        </Fab>
      </ListItem>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
