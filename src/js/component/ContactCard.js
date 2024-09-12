import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
          Email: {contact.email}<br />
          Phone: {contact.phone}<br />
          Address: {contact.address}
        </p>
        <Link to={`/edit/${contact.id}`} className="btn btn-primary">Edit</Link>
        <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
