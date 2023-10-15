import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import "./EditFormModal.css";

const EditFormModal = ({ closeModal, editRow, onePerson, personID }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

// const handleDataValue = (value) => {
//     setFirstName(value)

// }
  const handleFormModalUpdate = (e) => {
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
    editRow(personRow, personID);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close-x" onClick={closeModal}>
          X
        </span>
        <h2>Edit favorite person.</h2>
        <p>
          <span className="red">*</span>Optional
        </p>

        <form
          // if the edit icon has been clicked,
          onSubmit={handleFormModalUpdate}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            defaultValue={onePerson.firstName}
            // value={onePerson.firstName}
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
            // value={onePerson.lastName}
            defaultValue={onePerson.lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            minLength={3}
            required
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            className="date-picker"
            // value={onePerson.dateOfBirth}
            defaultValue={onePerson.dateOfBirth}
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
            value={onePerson.phoneNumber}
            defaultValue={onePerson.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            required
          />

          <label htmlFor="address">Address</label>
          <input
            // value={onePerson.address}
            defaultValue={onePerson.address}
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
            // value={onePerson.notes}
            defaultValue={onePerson.notes}
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

export default EditFormModal;
