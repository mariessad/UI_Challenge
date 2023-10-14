import React, { useState } from "react";
import "./Index.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Index = ({ data, editRow, deleteRow, getPeople }) => {

  const handleDeleteRow = (id) => {
    deleteRow(id);
    // refresh page to show that the person has been deleted
    // window.location.reload(false);
    getPeople();
  };

  return (
    <React.Fragment>
      <h1>Add a favorite person.</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="table-row">
              {console.log(row.id)}
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.address}</td>
              <td>{row.notes}</td>
              <td className="btn-container">
                <BsFillPencilFill
                  className="edit-btn"
                  onClick={() => editRow(row.id)}
                />
                <BsFillTrashFill
                  className="delete-btn"
                  onClick={() => handleDeleteRow(row.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Index;
