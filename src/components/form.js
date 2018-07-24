import React from "react";

const Form = props => (
  <div>
    <input type="text" onChange={props.onTextChange} />
    <button
      className="waves-effect waves-light btn todo-btn amber"
      onClick={e => {
        e.preventDefault();
        !props.text
          ? alert("Can't add empty item to list!")
          : props.addTodo(props.text);
      }}
    >
      <i className="material-icons left">add</i>
      Add todo
    </button>
    <button
      className="waves-effect waves-light btn todo-btn amber"
      onClick={props.removeTodos}
    >
      <i className="material-icons left">clear</i>
      Clear todos
    </button>
  </div>
);

export default Form;
