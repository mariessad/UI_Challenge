import React, { useState, useEffect } from "react";
import Index from "./components/Index.js";
import FormModal from "./components/FormModal.js";
import EditFormModal from "./components/EditFormModal.js";
// database
import { db } from "./firebase-config/firebase.js";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  const [editRow, setEditRow] = useState([]);
  // open/close modal states
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  // this state keeps track of the Id of the personRow clicked on in Index Form component
  const [personID, setPersonID] = useState("");

  // connection to firebase collection
  const peopleCollectionRef = collection(db, "people");

  const getPeopleList = async () => {
    // read the data from database and set the data
    try {
      const data = await getDocs(peopleCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setPerson(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPeopleList();
  }, []);

  // submit new person row
  const onSubmitPersonRow = async (data) => {
    try {
      await addDoc(peopleCollectionRef, {
        //  pass the data of the new person
        ...data,
      });

      getPeopleList();
      setOpenModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  // edit person
  const editPersonRow = async (id, personID) => {
    const personDoc = doc(db, "people", personID);
    // update doc with the new data
    try {
      await updateDoc(personDoc, id);
      getPeopleList();
      setOpenEditModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  // get one person doc by id
  const getOnePersonRow = async (id) => {
    setOpenEditModal(true);
    const personDoc = doc(db, "people", id);
    try {
      const personData = await getDoc(personDoc);
      const filteredPersonData = personData.data();
      // give person data to edit form
      setEditRow(filteredPersonData);
      setPersonID(id);
    } catch (err) {
      console.log(err);
    }
  };

  // delete person
  const deletePersonRow = async (id) => {
    // delete doc takes in doc from firestore
    const personDoc = doc(db, "people", id);
    await deleteDoc(personDoc);
  };

  return (
    <div className="App">
      <Index
        data={person}
        getOnePerson={getOnePersonRow}
        deleteRow={deletePersonRow}
        getPeople={getPeopleList}
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
          onSubmit={onSubmitPersonRow}
        ></FormModal>
      )}

      {openEditModal && (
        <EditFormModal
          closeModal={() => {
            setOpenEditModal(false);
            window.location.reload(true);
          }}
          editRow={editPersonRow}
          getOnePerson={getOnePersonRow}
          onePerson={editRow}
          personID={personID}
        />
      )}
    </div>
  );
}

export default App;
