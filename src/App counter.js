import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};
const store = createStore(counterReducer);

function App() {
  //使用state的变化诱发渲染
  const [click, setClick] = useState(false);
  store.subscribe(() => {
    const storeNow = store.getState();
    console.log(storeNow);
    setClick(!click);
  });

  return (
    <div className="Counter">
      <div>当前计数值为：{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => store.dispatch({ type: "ZERO" })}>0</button>
    </div>
  );
}
// 使用render和subscribe诱发渲染
// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// };
// 必须立即调用 renderApp 方法。 没有这个调用，应用程序的第一次渲染将永远不会发生。
// renderApp();
// store.subscribe(renderApp);

export default App;
