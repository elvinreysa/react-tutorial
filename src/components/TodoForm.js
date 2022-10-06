import React, { useState } from "react";

//get the inputted data from the input tag by using the button onClick handleSubmit
// use the handleChange as setter to get the value in input tag and set it in the input state
// and use the props.addTodo from TodoList to pass the input data to TodoList

function TodoForm(props) {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
      />
      <button type="submit" onClick={handleSubmit} className="todo-button">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
