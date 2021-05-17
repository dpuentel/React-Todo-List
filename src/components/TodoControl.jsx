import React from "react";
import { TodoAdd } from "./TodoAdd";

export function TodoControl({ todos, setTodos }) {

  const getUncompleatedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div id="myDIV" className="header">
      <h2>To Do List</h2>
      <TodoAdd setTodos={setTodos} />
      <button onClick={handleClearCompleted}>➖ Clear completed tasks</button>
      <div>
        <b>{getUncompleatedTasks()}</b> tasks remain to be finished.
      </div>
    </div>
  );
}
