import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <DeleteIcon className="note-icon" />
      </button>
    </div>
  );
}
