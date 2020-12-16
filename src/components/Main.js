import React, { useState } from "react";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { NewTodo } from "./NewTodo";
import { useSelector } from "react-redux";

function Main() {
  const todos = useSelector((state) => state.todos);
  const [isCreatingTodo, setIsCreatingTodo] = useState(false);
  const createTodoHandler = () => {
    setIsCreatingTodo((todoFlag) => !todoFlag);
  };
  /*eslint-disable*/
  console.log(todos);
  return (
    <main className="main">
      <NewTodo createTodoHandler={createTodoHandler} />
      {isCreatingTodo === true ? <CreateTodo /> : null}
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.todoId} />;
      })}
    </main>
  );
}

export { Main };
