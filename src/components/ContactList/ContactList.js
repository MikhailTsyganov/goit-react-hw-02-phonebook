import ContactListItem from '../ContactListItem/ContactListItem';

function ContactList({ onVisibleFilter }) {
  const visibleContactsss = onVisibleFilter();

  return (
    <ul>
      {visibleContactsss.map(contactsItem => (
        <ContactListItem
          key={contactsItem.id}
          name={contactsItem.name}
          number={contactsItem.number}
        />
      ))}
    </ul>
  );
}

export default ContactList;
