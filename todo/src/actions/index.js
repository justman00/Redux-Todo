import { DELETE_TODO, ADD_TODO } from "./types";

export const addTodo = value => {
  return { type: ADD_TODO, payload: { value, completed: false } };
};

export const deleteTodo = todo => {
  return { type: DELETE_TODO, payload: todo };
};
