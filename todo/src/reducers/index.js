import { ADD_TODO, DELETE_TODO } from "../actions/types";
import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const newState = state.todos.filter(
        el => el.value !== action.payload.value
      );
      return [...newState];
    default:
      return state;
  }
}

export default combineReducers({
  todos
});
