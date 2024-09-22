const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [],
	  },
	  actions: {

		createAgenda: ()=>{
			fetch("https://playground.4geeks.com/contact/agendas/mona", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
			  })
				.then((resp) => resp.json())
				.then((data) => setStore({ contacts: data }))
				.catch((err) => console.error("Error fetching contacts:", err));
			},
	  
		
		// Fetch contacts from the API (GET)
		getContacts: () => {
		  fetch("https://playground.4geeks.com/contact/agendas/mona", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => resp.json())
			.then((data) => setStore({ contacts: data }))
			.catch((err) => console.error("Error fetching contacts:", err));
		},
  
		// Add a new contact (POST)
		addContact: (contact) => {
		  fetch("https://playground.4geeks.com/contact/agendas/mona/contacts", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(contact),
		  })
			.then((resp) => {
			  if (!resp.ok) throw new Error("Failed to add contact");
			  return resp.json();
			})
			.then(() => getActions().getContacts()) // Refresh contact list
			.catch((err) => console.error("Error adding contact:", err));
		},
  
		// Delete a contact (DELETE)
		deleteContact: (id) => {
			fetch(`https://playground.4geeks.com/contact/agendas/mona/contacts/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((resp) => {
				if (!resp.ok) throw new Error("Failed to delete contact");
				return resp.json();
			})
			.then(() => {
				actions.getContacts(); 
			})
			.catch((err) => console.error("Error deleting contact:", err));
		},
  
		// Update a contact (PUT)
		updateContact: (id, contact) => {
		  fetch(`https://playground.4geeks.com/contact/agendas/mona/contacts/${id}`, {
			method: "PUT",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(contact),
		  })
			.then((resp) => {
			  if (!resp.ok) throw new Error("Failed to update contact");
			  return resp.json();
			})
			.then(() => getActions().getContacts()) // Refresh contact list
			.catch((err) => console.error("Error updating contact:", err));
		},
	  },
	};
  };
  
  export default getState;