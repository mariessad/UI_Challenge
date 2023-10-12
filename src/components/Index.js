import React, { useState } from "react";
import "./Index.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Index = ({ data, editRow, deleteRow }) => {
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
            <tr key={row.personID}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.address}</td>
              <td>{row.notes}</td>
              <td>
                <BsFillPencilFill
                  className="edit-btn"
                  onClick={() => editRow()}
                />
                <BsFillTrashFill
                  className="delete-btn"
                  onClick={() => deleteRow()}
                />
                {/* delete and edit button go here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Index;
