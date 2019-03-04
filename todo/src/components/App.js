import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions";

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

  return (
    <div>
      <h1>hi</h1>
      <input type="text" value={value} onChange={e => handleChange(e)} />
      <button onClick={e => handleSubmit(e)}>Add a todo</button>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.value}>{todo.value}</li>
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
  { addTodo, deleteTodo }
)(App);
