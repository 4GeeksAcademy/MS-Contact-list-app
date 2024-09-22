import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "mona", 
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const contactToEdit = store.contacts.contacts.find(
        (contact) => contact.id === parseInt(id)
      );
      if (contactToEdit) {
        setContact(contactToEdit);
      }
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actions.updateContact(id, contact);
    } else {
      actions.addContact(contact);
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1>{id ? "Edit Contact" : "Add New Contact"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update Contact" : "Save Contact"}
        </button>
      </form>
    </div>
  );
};

export default AddContact;