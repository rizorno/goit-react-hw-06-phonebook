import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import css from './contact-form.module.scss';

const ContactForm = () => {
  const selectContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    const messageName = selectContacts.find(
      element => element.name === form.name.value
    );
    if (messageName) {
      alert(`${messageName.name} is already in contacts!`);
      return;
    }

    const messageNumber = selectContacts.find(
      element => element.number === form.number.value
    );
    if (messageNumber) {
      alert(`${messageNumber.number} is already in contacts!`);
      return;
    }

    dispatch(addContact(form.name.value, form.number.value));
    form.reset();
  };

  const idElement = nanoid();

  return (
    <form onSubmit={handleSubmitForm} className={css.form}>
      <label>
        Name
        <input
          id={idElement}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </label>

      <label>
        Number
        <input
          id={idElement}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
