import React, { useState } from "react";
import "./FormModal.css";

const FormModal = ({ onSubmit, closeModal }) => {
  //   const [newPerson, setNewPerson] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");



  const handleFormModalSubmit = (e) => {
    //prevent refresh
    e.preventDefault();

    const personRow = {
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      address,
      notes,
    };

    // console.log(personRow)
    onSubmit(personRow);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close-x" onClick={closeModal}>
          X
        </span>
        <h2>Complete the fields below.</h2>

        <p>
          <span className="red">*</span>Optional
        </p>
        <form onSubmit={handleFormModalSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
          {/* what validation is needed for a birthday and phone #? */}
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="text"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth"
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
          />
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            required
          />
          <label htmlFor="notes">
            <span className="red">*</span>Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            name="notes"
            id="notes"
            placeholder="*Notes"
          ></textarea>
          <div className="button-container">
            <button type="" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
