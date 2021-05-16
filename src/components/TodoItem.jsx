import React from "react";

export function TodoItem({ todo, toogleTodoCompleted, removeTodo }) {
  const { id, task, completed } = todo;

  const handleToogleTodoCompleted = () => {
    toogleTodoCompleted(id);
  };

  const handleRemoveTodo = (e) => {
    console.log(e);
    e.stopPropagation();
    removeTodo(id);
  };

  const getTodoCreateDateFormated = () => {
    return timestampToDateFormated(todo.createdAt);
  };

  const getTodoCompletedDateFormated = () => {
    return timestampToDateFormated(todo.completedAt);
  };

  const timestampToDateFormated = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <li
      className={completed ? "checked" : ""}
      onClick={handleToogleTodoCompleted}
    >
      <span className="todo-created-date"># {getTodoCreateDateFormated()}</span>{" "}
      <span>{task}</span>
      {todo.completed && (
        <span className="todo-completed-date">
          Completed at # {getTodoCompletedDateFormated()}
        </span>
      )}
      <span className="close" onClick={handleRemoveTodo}>
        ×
      </span>
    </li>
  );
}
