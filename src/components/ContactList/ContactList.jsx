import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import css from './contact-list.module.scss';

const ContactList = () => {
  const selectContacts = useSelector(getContacts);
  const selectFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  // eslint-disable-next-line array-callback-return
  const elements = selectContacts.map(element => {
    const { id, name, number } = element;

    const handleDeleteContact = () => {
      dispatch(deleteContact(id));
    };

    const findElementName = name
      .toLowerCase()
      .includes(selectFilter.toLowerCase());

    const findElementNumber = number.includes(selectFilter);

    if (findElementName) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={handleDeleteContact}>
            Delete
          </button>
        </li>
      );
    } else if (findElementNumber) {
      return (
        <li key={id}>
          <div className={css.box}>
            <p className={css.name}>{name}:</p>
            <p className={css.number}>{number}</p>
          </div>
          <button type="button" onClick={handleDeleteContact}>
            Delete
          </button>
        </li>
      );
    }
  });

  return <ul>{elements}</ul>;
};

export default ContactList;
