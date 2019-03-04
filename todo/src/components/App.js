import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../actions";

// did mvp
function App(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  }

  function styleIt(comp) {
    if (comp) {
      return { textDecoration: "line-through" };
    }
    return { textDecoration: "none" };
  }

  return (
    <div>
      <h1>hi</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={value} onChange={e => handleChange(e)} />
        <button>Add a todo</button>
      </form>
      <ul>
        {props.todos.map(todo => (
          <li
            style={styleIt(todo.completed)}
            onClick={() => props.toggleTodo(todo.value)}
            key={todo.value}
          >
            {todo.value}
            <strong
              style={{ marginLeft: "25px" }}
              onClick={() => props.deleteTodo(todo.value)}
            >
              X
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, toggleTodo }
)(App);
