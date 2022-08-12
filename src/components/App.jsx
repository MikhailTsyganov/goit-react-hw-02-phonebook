import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      console.log('обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmitHandler = ({ name, number }) => {
    this.setState(prevState => {
      const nameSearch = this.state.contacts.find(user => user.name === name);
      const numberSearch = this.state.contacts.find(
        user => user.number === number
      );

      const userId = nanoid();
      const newArray = [...prevState.contacts];
      newArray.push({ id: userId, name: name, number: number });
      return nameSearch || numberSearch
        ? alert('Номер или имя уже есть в базе')
        : { contacts: newArray };
    });
  };

  changeFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  visibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteUser = id => {
    this.setState(prevState => {
      const afterDeleteArray = prevState.contacts.filter(
        user => user.id !== id
      );
      return { contacts: afterDeleteArray };
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={s.container}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.onSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          onVisibleFilter={this.visibleFilter}
          onDeleteUser={this.onDeleteUser}
        />
      </div>
    );
  }
}

export default App;
