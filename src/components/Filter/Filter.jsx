import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import css from './filter.module.scss';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterContact = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const idElement = nanoid();

  return (
    <label className={css.label}>
      Find contacts by name or by number
      <input
        id={idElement}
        onChange={handleFilterContact}
        value={filter}
        name="filter"
        title="Find contacts by name or by number"
        required
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
