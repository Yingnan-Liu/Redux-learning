const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return state.concat(action.data);
    case "TOGGLE_IMPORTANCE": {
      const id = action.data.id;
      // 创建note副本
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      //返回替换掉对应note的新数组
      return state.map((note) => (note.id !== id ? note : changedNote));
    }
    default:
      return state;
  }
};

const generateId = () => Math.floor(Math.random() * 1000000);
// action creators
export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content: content,
      important: false,
      id: generateId(),
    },
  };
};
export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPOTANCE",
    data: { id },
  };
};
export default noteReducer;
