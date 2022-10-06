import React from "react";

//display all the todos that are added in the TodoList.js
const Todo = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <div key = {index} className="todo-row complete">
      {todo}
      </div>})}
    </>
  )
  
  
};

export default Todo;
