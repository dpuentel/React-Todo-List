import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoRemoveCompleted } from "./TodoRemoveCompleted";

export function TodoControl({ todos, setTodos }) {
  const getUncompleatedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div id="myDIV" className="header">
      <h2>To Do List</h2>
      <TodoAdd setTodos={setTodos} />
      <TodoRemoveCompleted todos={todos} setTodos={setTodos} />
      <div>
        <b>{getUncompleatedTasks()}</b> tasks remain to be finished.
      </div>
    </div>
  );
}
