import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = filter => dispatch(filterContacts(filter));

  const changeValue = e => changeFilter(e.target.value);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={changeValue}
      />
    </Label>
  );
};
