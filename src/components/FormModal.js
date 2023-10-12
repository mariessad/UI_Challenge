import React, {useState} from 'react';
import "./FormModal.css";

const FormModal = () => {
  const handleFormModalSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      dateOfBirth: e.target.dateOfBirth.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
      notes: e.target.notes.value,
    };
    return (
      <div className='modal-container'>
        <h3>Complete the fields below.</h3>
        <form onSubmit={handleFormModalSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required/>
          {/* what validation is needed for a birthday and phone #? */}
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="text" name="dateOfBirth" id="dateOfBirth"  required/>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required/>
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes"></textarea>
          <button type="">Cancel</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
};
export default FormModal;
