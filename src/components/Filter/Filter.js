import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterLabel>
    </div>
  );
};

export default Filter;
