let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    payload: {
      id: nextTodoId++,
      text
    }
  };
};

export const clearTodo = {
  type: "CLEAR_TODO"
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id
    }
  };
};
