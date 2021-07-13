import React from "react";
import { createNote } from "../../reducers/noteReducer";
import { useDispatch } from "react-redux";
const NewNote = (props) => {
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    //获取name="note"的input的值
    const content = event.target.note.value;
    //input置空
    event.target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">addNote</button>
    </form>
  );
};

export default NewNote;
