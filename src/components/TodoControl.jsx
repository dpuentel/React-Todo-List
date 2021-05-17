import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoControl({ todos, setTodos }) {
  const todoTaskInputRef = useRef();

  const getUncompleatedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskInputRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          task,
          completed: false,
          completedAt: undefined,
          createdAt: Date.now(),
        },
      ];
    });

    todoTaskInputRef.current.value = null;
  };

  return (
    <div id="myDIV" className="header">
      <h2>To Do List</h2>
      <input ref={todoTaskInputRef} type="text" placeholder="New task" />
      <button onClick={handleTodoAdd} className="addBtn">
        ➕
      </button>
      <button onClick={handleClearCompleted}>➖ Clear completed tasks</button>
      <div>
        <b>{getUncompleatedTasks()}</b> tasks remain to be finished.
      </div>
    </div>
  );
}
