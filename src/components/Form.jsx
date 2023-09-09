import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Form(props) {
  const [title, setTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [isExpanded, setExpanded] = useState(false);

  function expanded() {
    setExpanded(true);
  }

  function handleTitle(event) {
    const { value } = event.target;

    setTitle(value);
    // console.log(title);
  }

  function handleTextInput(evt, props) {
    const { value } = evt.target;

    setTextValue(value);
    // console.log(textValue);
  }
  function handleSubmit(e) {
    props.getData([title, textValue]);

    e.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={handleTitle}
            value={title}
            placeholder="Title"
          ></input>
        ) : null}
        <textarea
          onChange={handleTextInput}
          onClick={expanded}
          value={textValue}
          placeholder="Take a Note..."
          rows={isExpanded ? "2" : "1"}
        ></textarea>
        {isExpanded ? (
          <Fab
            onClick={handleSubmit}
            type="submit"
            size="medium"
            color="primary"
            aria-label="add"
            className="button"
          >
            <AddIcon className="icon" />
          </Fab>
        ) : null}
      </form>
    </div>
  );
}
export default Form;
