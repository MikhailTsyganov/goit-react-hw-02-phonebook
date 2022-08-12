import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  onInput = e => {
    const type = e.target.name;
    const value = e.target.value;
    this.setState({ [type]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addContact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.addContact}>
        <label className={s.label}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
            onChange={this.onInput}
            value={name}
          />
        </label>

        <label className={s.label}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Phone number"
            required
            onChange={this.onInput}
            value={number}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
