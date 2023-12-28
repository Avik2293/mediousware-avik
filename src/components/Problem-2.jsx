import React, { useState } from "react";
import * as bootstrap from "bootstrap";

const Problem2 = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [usContact, setUsContact] = useState([]);
  const [contactDetails, setContactDetails] = useState({});

  // get all contact
  const allContactHandle = async () => {
    const response = await fetch(
      "https://contact.mediusware.com/api/contacts/"
    );
    const contacts = await response.json();
    setAllContacts(contacts?.results);
  };

  //get us contact
  const usContactHandle = async () => {
    const response = await fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/"
    );
    const contact = await response.json();
    setUsContact(contact?.results);
  };

  //get all even contact
  const evenAllContactHandle = (e) => {
    if (e.target.type === "checkbox" ? e.target.checked : e.target.value) {
      const evenContacts = allContacts.filter(
        (contact) => contact.id && !(contact.id % 2) && contact
      );
      setAllContacts(evenContacts);
    } else {
      allContactHandle();
    }
  };

  // get us even contact
  const evenUsContactHandle = (e) => {
    if (e.target.type === "checkbox" ? e.target.checked : e.target.value) {
      const evenContacts = usContact.filter(
        (contact) => contact.id && !(contact.id % 2) && contact
      );
      setUsContact(evenContacts);
    } else {
      usContactHandle();
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalA"
            onClick={allContactHandle}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalB"
            onClick={usContactHandle}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* all contact modal */}
      <div
        className="modal fade"
        id="modalA"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                All Contact
              </h1>
            </div>
            <div className="modal-body">
              {allContacts?.map((contact) => (
                <p
                  key={contact?.id}
                  className="d-block my-2 border-0 text-primary"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalC"
                  onClick={() => setContactDetails(contact)}
                >
                  {contact?.phone}
                </p>
              ))}
            </div>
            <div className="modal-footer justify-content-between w-100">
              <input
                onClick={evenAllContactHandle}
                type="checkbox"
                name="even"
                id=""
              />
              <div>
                <button
                  type="button"
                  className="btn mx-1"
                  data-bs-dismiss="modal"
                  style={{ background: "white", border: "1px solid #46139f" }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn mx-1 border-0 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalB"
                  style={{ background: "#ff7f50" }}
                  onClick={usContactHandle}
                >
                  US contacts
                </button>
                <button
                  type="button"
                  className="btn mx-1 border-0 text-white"
                  style={{ background: "#46139f" }}
                >
                  All Contacts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* us contact modal */}
      <div
        className="modal fade"
        id="modalB"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                US contact
              </h1>
            </div>
            <div className="modal-body">
              {usContact?.map((contact) => (
                <p
                  key={contact?.id}
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalC"
                  onClick={() => setContactDetails(contact)}
                >
                  {contact?.phone}
                </p>
              ))}
            </div>
            <div className="modal-footer justify-content-between w-100">
              <input
                onClick={evenUsContactHandle}
                type="checkbox"
                name="even"
                id=""
              />
              <div>
                <button
                  type="button"
                  className="btn mx-1"
                  data-bs-dismiss="modal"
                  style={{ background: "white", border: "1px solid #46139f" }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn mx-1 border-0 text-white"
                  style={{ background: "#ff7f50" }}
                >
                  US contacts
                </button>
                <button
                  type="button"
                  className="btn mx-1 border-0 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalA"
                  style={{ background: "#46139f" }}
                  onClick={allContactHandle}
                >
                  All Contacts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact details modal */}
      <div
        className="modal fade"
        id="modalC"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Contact Details
              </h1>
            </div>
            <div className="modal-body">
              <h4>Contry: {contactDetails?.country?.name}</h4>
              <p>Phone : {contactDetails?.phone}</p>
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                style={{ background: "white", border: "1px solid #46139f" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
