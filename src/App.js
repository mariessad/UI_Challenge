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

  useEffect(() => {
    getPeopleList();
  }, []);

  // submit new person row
  const onSubmitPeopleList = async (data) => {
    try {
      await addDoc(peopleCollectionRef, {
        //  pass the data of the new person here
        ...data
      });

      getPeopleList();  
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
      {openModal && (
        <FormModal
          closeModal={() => {
            setOpenModal(false);
          }}
          onSubmit={onSubmitPeopleList}
        ></FormModal>
      )}
    </div>
  );
}

export default App;
