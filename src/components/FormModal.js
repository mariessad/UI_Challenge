import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import "./FormModal.css";

const FormModal = ({ onSubmit, closeModal }) => {
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
          {/* {data.map((item) => item.id)} */}
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            minLength={3}
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
            minLength={3}
            required
          />
          {/* what validation is needed for a birthday and phone #? */}
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            className="date-picker"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            min="1900-01-01"
            max="2023-01-01"
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <PatternFormat
            format="###-###-####"
            allowEmptyFormatting
            mask="_"
            patternChar="#"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            required
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
