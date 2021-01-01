import React, { useState } from "react";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { NewTodo } from "./NewTodo";
import { useSelector } from "react-redux";
import "../../styles/Main.css";

function Main() {
  const todos = useSelector((state) => state.todos);
  const [isCreatingTodo, setIsCreatingTodo] = useState(false);
  const createTodoHandler = () => {
    setIsCreatingTodo((todoFlag) => !todoFlag);
  };
  return (
    <main className="main">
      {isCreatingTodo === false ? (
        <NewTodo createTodoHandler={createTodoHandler} />
      ) : null}
      {isCreatingTodo === true ? <CreateTodo createTodoHandler={createTodoHandler} /> : null}
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.todoId} />;
      })}
    </main>
  );
}

export { Main };
