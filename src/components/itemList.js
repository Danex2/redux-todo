import React from "react";

const ItemList = props => (
  <div className="todo-list">
    <ul className="collection">
      {props.todoList.length === 0
        ? "Add a todo"
        : props.todoList.map((todo, index) => {
            return (
              <li className="collection-item indigo darken-2" key={index}>
                <div className="collection-item-inner">
                  {todo.text}
                  <button
                    className="btn-floating btn-small secondary-content amber"
                    onClick={e => {
                      e.preventDefault();
                      props.removeTodo(todo.id);
                    }}
                  >
                    <i className="material-icons">clear</i>
                  </button>
                </div>
              </li>
            );
          })}
    </ul>
  </div>
);

export default ItemList;
