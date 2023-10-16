import React from "react";
import "./Index.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Index = ({ data, getOnePerson, deleteRow, getPeople }) => {
  // pass the id data to the app component
  const handleEditRow = (id) => {
    getOnePerson(id);
  };

  const handleDeleteRow = (id) => {
    deleteRow(id);
    // re-render data to show that the person has been deleted
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
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.dateOfBirth}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.address}</td>
              <td>{row.notes}</td>
              <td className="btn-container">
                <BsFillPencilFill
                  className="edit-btn"
                  onClick={() => handleEditRow(row.id)}
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
