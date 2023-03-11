import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsThunks';
import { getContacts } from 'redux/contacts/contactsSelectors';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required')
    .min(5, 'Number should be of minimum 7 characters length'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkIsInContacts = newName =>
    contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase().trim()
    );

  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;

    const isInContacts = checkIsInContacts(name);

    if (isInContacts) {
      alert(`"${name} exist in contact list"`);
      resetForm();
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 1,
          textAlign: 'center',
        }}
      >
        <TextField
          margin="normal"
          fullWidth
          size="small"
          id="name"
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          size="small"
          name="number"
          label="Number"
          id="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          autoComplete="current-number"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 3 }}>
          + Add contact
        </Button>
      </Box>
    </>
  );
};
