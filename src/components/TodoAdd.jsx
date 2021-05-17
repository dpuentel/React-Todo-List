import React, { Fragment, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoAdd({ setTodos }) {
  const todoTaskInputRef = useRef();

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
          workingTime: undefined,
          workingStartTime: undefined,
          woekingEndTime: undefined,
          started: false,
          notes: "",
          parentId: undefined,
          children: [],
        },
      ];
    });

    todoTaskInputRef.current.value = null;
  };

  return (
    <Fragment>
      <input ref={todoTaskInputRef} type="text" placeholder="New task" />
      <button onClick={handleTodoAdd} className="addBtn">
        ➕
      </button>
    </Fragment>
  );
}
