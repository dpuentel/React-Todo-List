import React from "react";

export function TodoCountUncompleted({ todos }) {
  const getUncompleatedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div>
      <b>{getUncompleatedTasks()}</b> tasks remain to be finished.
    </div>
  );
}
