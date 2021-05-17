import React, { Fragment, useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoControl } from "./components/TodoControl";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Tarea 1",
      completed: false,
      completedAt: undefined,
      createdAt: Date.now(),
    },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toogleTodoCompleted = (id) => {
    const newTodos = [...todos];
    const todoToComplete = newTodos.find((todo) => todo.id === id);
    todoToComplete.completed = !todoToComplete.completed;
    todoToComplete.completedAt = todoToComplete.completed
      ? Date.now()
      : undefined;
    setTodos(newTodos);
  };

  const removeTodo = (id, e) => {
    const todosToKeep = todos.filter((todo) => todo.id !== id);
    setTodos(todosToKeep);
  };

  return (
    <Fragment>
      <TodoControl todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        toogleTodoCompleted={toogleTodoCompleted}
        removeTodo={removeTodo}
      />
    </Fragment>
  );
}
