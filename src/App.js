import React, { useState, useEffect } from "react";
import Index from "./components/Index.js";
import FormModal from "./components/FormModal.js";
import { db } from "./firebase-config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  // const [data, setData] = useState("");
  const [editRow, setEditRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // connection to firebase collection
  const peopleCollectionRef = collection(db, "people");

  useEffect(() => {
    const getPeopleList = async () => {
      // read the data from database and set the data
      try {
        const data = await getDocs(peopleCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}))
        console.log(filteredData);
        setPerson(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getPeopleList();
  }, []);


  const handleEditRow = (row) => {
    setEditRow(row);
    // open modal to edit row
  };

  const handleDeleteRow = (row) => {};
  // default data
  const dummyData = [
    {
      personId: 1,
      firstName: "Angela",
      lastName: "S",
      dateOfBirth: "01/12/1990",
      phoneNumber: "555-123-1234",
      address: "123 Brighton Street, MA 02453",
      notes: "",
    },
    {
      personId: 2,
      firstName: "Lily",
      lastName: "D",
      dateOfBirth: "02/12/1989",
      phoneNumber: "555-123-1234",
      address: "122 Orange Road, MA 02455",
      notes: "",
    },
    {
      personId: 3,
      firstName: "Keith",
      lastName: "W",
      dateOfBirth: "08/31/1993",
      phoneNumber: "555-123-1234",
      address: "9 Wood Drive, NH 04652",
      notes: "",
    },
  ];

  return (
    <div className="App">
      <Index
        data={person}
        // dummyData={dummyData}
        editRow={handleEditRow}
        deleteRow={handleDeleteRow}
      ></Index>
      <button onClick={() => setOpenModal(true)} className="btn">
        +
      </button>
      <FormModal></FormModal>
    </div>
  );
}

export default App;
