import React from "react";
import { useState } from "react";
import "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(initialValues);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {};

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm initialValues={initialValues} onAdd={addContact} />
        <SearchBox />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </div>
  );
};

export default App;
