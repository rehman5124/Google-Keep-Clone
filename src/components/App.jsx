import React, { useState } from "react";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import Form from "./Form";
import Note from "./Note";

function App(title) {
  const [notes, setNotes] = useState([]);

  function createNote(newNote) {
    // const [newTitle, newContent] = data;
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="header">
        <h1>
          <NoteAltOutlinedIcon className="head-icon" fontSize="large" /> Keeper
        </h1>
      </div>
      <div id="form-area">
        <Form getData={createNote} />
      </div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem[0]}
            content={noteItem[1]}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}
export default App;
