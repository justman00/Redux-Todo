import { DELETE_TODO, ADD_TODO, TOGGLE_TODO } from "./types";

export const addTodo = value => {
  return { type: ADD_TODO, payload: { value, completed: false } };
};

export const deleteTodo = todo => {
  return { type: DELETE_TODO, payload: todo };
};

export const toggleTodo = value => ({ type: TOGGLE_TODO, payload: value });
