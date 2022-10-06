import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

//pass the function addTodo in TodoForm and pass the todos in Todo for listing

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos)
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm addTodo = {addTodo} />
      <Todo todos = {todos} />
    </>
  );
}

export default TodoList;
