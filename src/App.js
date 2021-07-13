import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import noteReducer, {
  createNote,
  toggleImportanceOf,
} from "./reducers/noteReducer";
const store = createStore(noteReducer);

const App = () => {
  const addNote = (event) => {
    event.preventDefault();
    //获取name="note"的input的值
    const content = event.target.note.value;
    console.log(content);
    event.target.note.value = "";
    store.dispatch(createNote(content));
  };
  const toggleImportance = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">addNote</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content}
            <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};
// 必须立即调用 renderApp 方法。 没有这个调用，应用程序的第一次渲染将永远不会发生。
renderApp();
store.subscribe(renderApp);
export default App;
