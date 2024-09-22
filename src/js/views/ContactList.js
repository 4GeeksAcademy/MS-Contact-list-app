import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import  ContactCard  from "../component/ContactCard";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.createAgenda();
    actions.getContacts(); 
  }, []);

  // Log store updates for verification
  useEffect(() => {
    console.log("Updated Contacts in Store: ", store.contacts.contacts);
  }, [store.contacts.contacts]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Contact List</h1>
        <Link to="/add" className="btn btn-primary">Add Contact</Link>
      </div>
      <div className="row mt-3">
        {store.contacts.contacts && store.contacts.contacts.length > 0 ? (
          store.contacts.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No contacts found. Please add a contact.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;