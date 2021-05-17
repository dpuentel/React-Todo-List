import React from "react";

export function TodoRemoveCompleted({ todos, setTodos }) {
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <button onClick={handleClearCompleted}>➖ Clear completed tasks</button>
  );
}
