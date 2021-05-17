import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoRemoveCompleted } from "./TodoRemoveCompleted";
import { TodoCountUncompleted } from "./TodoCountUncompleted";

export function TodoControl({ todos, setTodos }) {

  return (
    <div id="myDIV" className="header">
      <h2>To Do List</h2>
      <TodoAdd setTodos={setTodos} />
      <TodoRemoveCompleted todos={todos} setTodos={setTodos} />
      <TodoCountUncompleted todos={todos} />
    </div>
  );
}
