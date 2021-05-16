import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toogleTodoCompleted, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toogleTodoCompleted={toogleTodoCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
