import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/types";
import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const newState = state.filter(el => el.value !== action.payload);
      console.log(newState);
      return [...newState];
    case TOGGLE_TODO:
      const toggledArr = state.map(todo => {
        if (todo.value === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
      return [...toggledArr];
    default:
      return state;
  }
}

export default combineReducers({
  todos
});
