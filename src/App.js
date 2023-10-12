import React, { useState, useEffect } from "react";
import Index from "./components/Index.js";
import FormModal from "./components/FormModal.js";
import { db } from "./firebase-config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // connection to firebase collection
  const peopleCollectionRef = collection(db, "people");

  useEffect(() => {
    const getPeopleList = async () => {
      // read the data from database and set the data
      try {
        const data = await getDocs(peopleCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        console.log(filteredData);
        setPerson(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getPeopleList();
  }, []);

  // submit new person row
  const onSubmitPeopleList = async (e) => {
    try {
      await addDoc(peopleCollectionRef, {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        dateOfBirth: e.target.dateOfBirth.value,
        phoneNumber: e.target.phoneNumber.value,
        address: e.target.address.value,
        notes: e.target.notes.value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditRow = (row) => {
    setEditRow(row);
    // open modal to edit row
  };

  const handleDeleteRow = (row) => {};

  return (
    <div className="App">
      <Index
        data={person}
        editRow={handleEditRow}
        deleteRow={handleDeleteRow}
      ></Index>
      <button onClick={() => setOpenModal(true)} className="btn">
        +
      </button>
      {/* if modal value is true, render the modal */}
      {openModal && <FormModal submit={onSubmitPeopleList}></FormModal>}
    </div>
  );
}

export default App;
