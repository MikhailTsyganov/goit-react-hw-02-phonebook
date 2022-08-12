import React, { Component } from 'react';
import s from './ContactListItem.module.css';

class ContactListItem extends Component {
  onDelete = () => {
    const { id, onDeleteUser } = this.props;
    onDeleteUser(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li className={s.item}>
        <p className={s.name}>
          {name}: {number}
        </p>
        <button className={s.delete} type="button" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
