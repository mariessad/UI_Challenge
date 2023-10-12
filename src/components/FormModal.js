import React, {useState} from 'react';
import "./FormModal.css";

const FormModal = ({submit}) => {
//   const handleFormModalSubmit = (e) => {
//     e.preventDefault();

//     const body = {
//       firstName: e.target.firstName.value,
//       lastName: e.target.lastName.value,
//       dateOfBirth: e.target.dateOfBirth.value,
//       phoneNumber: e.target.phoneNumber.value,
//       address: e.target.address.value,
//       notes: e.target.notes.value,
//     };
    return (
      <div className='modal-container'>
      <div className='modal'> 
      <span className='close-x'>X</span>
        <h2>Complete the fields below.</h2>
        
        <p><span className='red'>*</span>Optional</p>
        <form onSubmit={submit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder='First Name' required/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
          {/* what validation is needed for a birthday and phone #? */}
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="text" name="dateOfBirth" id="dateOfBirth" placeholder="Date of Birth" required/>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='text' name="phoneNumber" id="phoneNumber" placeholder='Phone Number'/>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" placeholder='Address'required/>
          <label htmlFor="notes"><span className='red'>*</span>Notes</label>
          <textarea name="notes" id="notes" placeholder='*Notes'></textarea>
          <div className='button-container'>
          <button type="">Cancel</button>
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    );
  };

export default FormModal;
