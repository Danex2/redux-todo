import React from "react";

const ItemList = props => (
  <div className="todo-list">
    <ul className="collection">
      {props.todoList.length === 0
        ? "Add a todo"
        : props.todoList.map((todo, index) => {
            return (
              <li className="collection-item" key={index}>
                <div>
                  {todo.text}
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">send</i>
                  </a>
                </div>
                <button
                  className="btn-floating btn-small"
                  onClick={e => {
                    e.preventDefault();
                    props.removeTodo(todo.id);
                  }}
                >
                  <i className="material-icons">clear</i>
                </button>
              </li>
            );
          })}
    </ul>
  </div>
);

export default ItemList;
