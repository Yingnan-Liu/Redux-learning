import React from "react";
import { toggleImportanceOf } from "../../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Note = ({ note, handleClick }) => (
  <li onClick={handleClick}>
    {note.content}
    <strong>{note.important ? "important" : ""}</strong>
  </li>
);

const Notes = () => {
  const dispatch = useDispatch();
  //代替store.getState()  选择器函数
  const notes = useSelector((state) => state);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
