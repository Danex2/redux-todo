import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/todo";
import "./styles/styles.scss";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("app")
);
