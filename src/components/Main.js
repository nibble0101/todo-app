import React, { useState } from "react";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { NewTodo } from "./NewTodo";
import { useSelector } from "react-redux";

function Main() {
  const todo = useSelector((state) => state);
  const [isCreatingTodo, setIsCreatingTodo] = useState(false);
  const createTodoHandler = () => {
    setIsCreatingTodo((todoFlag) => !todoFlag);
  };
  return (
    <main className="main">
      <NewTodo createTodoHandler={createTodoHandler} />
      {isCreatingTodo === true ? <CreateTodo /> : null}
      <Todo todo={todo} />
    </main>
  );
}

export { Main };
