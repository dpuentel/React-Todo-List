import React, { Fragment, useEffect, useRef, useState } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false, completedAt: undefined, createdAt: Date.now() },
  ]);

  const todoTaskInputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleTodoAdd = () => {
    const task = todoTaskInputRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false, completedAt: undefined, createdAt: Date.now() }];
    });

    todoTaskInputRef.current.value = null;
  };

  const toogleTodoCompleted = (id) => {
    const newTodos = [...todos];
    const todoToComplete = newTodos.find((todo) => todo.id === id);
    todoToComplete.completed = !todoToComplete.completed;
    todoToComplete.completedAt = todoToComplete.completed ? Date.now() : undefined;
    setTodos(newTodos);
  };

  const getUncompleatedTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const removeTodo = (id, e) => {
    const todosToKeep = todos.filter((todo) => todo.id !== id);
    setTodos(todosToKeep);
  }

  return (
    <Fragment>
      <div id="myDIV" className="header">
        <h2>To Do List</h2>
        <input ref={todoTaskInputRef} type="text" placeholder="New task" />
        <button onClick={handleTodoAdd} className="addBtn">➕</button>
        <button onClick={handleClearCompleted}>➖ Clear completed tasks</button>
        <div>
          <b>{getUncompleatedTasks()}</b> tasks remain to be finished.
        </div>
      </div>
      <TodoList todos={todos} toogleTodoCompleted={toogleTodoCompleted} removeTodo={removeTodo} />
    </Fragment>
  );
}
