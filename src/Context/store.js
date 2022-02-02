import React, { createContext, useReducer } from 'react';

const initialState = {
  todos: [
    {
      text: 'Some text content',
      id: 1,
    },
  ],
  addTodos: () => {},
  removeTodos: () => {},
  completed: () => {},
};

export const TodosContext = createContext(initialState);

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.payload],
      };

    case 'remove':
      return {
        todos: state.todos.filter((note) => note.id !== action.payload),
      };

    case 'done':
      const newTodoState = [...state.todos];
      const foundIndex = newTodoState.findIndex(
        (note) => note.id === action.payload
      );
      newTodoState[foundIndex] = {
        ...newTodoState[foundIndex],
        done: !newTodoState[foundIndex].done,
      };
      return {
        todos: newTodoState,
      };

    default:
      return state;
  }
};

export default ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodos = (note) =>
    dispatch({
      type: 'add',
      payload: note,
    });

  const removeTodos = (id) =>
    dispatch({
      type: 'remove',
      payload: id,
    });

  const completed = (id) =>
    dispatch({
      type: 'done',
      payload: id,
    });

  return (
    <TodosContext.Provider value={{ state, addTodos, removeTodos, completed }}>
      {children}
    </TodosContext.Provider>
  );
};
