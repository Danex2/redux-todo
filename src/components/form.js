import React from "react";

const Form = props => (
  <div>
    <input type="text" onChange={props.onTextChange} />
    <button
      className="waves-effect waves-light btn todo-btn"
      onClick={e => {
        e.preventDefault();
        !props.text ? alert("Item can't be empty") : props.addTodo(props.text);
      }}
    >
      <i class="material-icons left">add</i>
      Add todo
    </button>
    <button
      className="waves-effect waves-light btn todo-btn"
      onClick={props.removeTodos}
    >
      <i class="material-icons left">clear</i>
      Clear todos
    </button>
  </div>
);

export default Form;
