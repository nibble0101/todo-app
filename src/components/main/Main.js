import React, { useState, useLayoutEffect, useRef } from "react";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
import { NewTodo } from "./NewTodo";
import { useSelector } from "react-redux";
import { getHeaderOffsetHeight } from "../../utils/css-styles-utils";
import "../../styles/Main.css";

function Main() {
  const todos = useSelector((state) => state.todos);
  const [isCreatingTodo, setIsCreatingTodo] = useState(false);
  const marginRef = useRef(null);
  const createTodoHandler = () => {
    setIsCreatingTodo((todoFlag) => !todoFlag);
  };
  useLayoutEffect(() => {
     marginRef.current.style.marginTop = `${getHeaderOffsetHeight()}px`;
  }, [])
  return (
    <main className="main" ref = { marginRef }>
      <div>
        {isCreatingTodo === false ? (
          <NewTodo createTodoHandler={createTodoHandler} />
        ) : null}
      </div>
      <div>
        {isCreatingTodo === true ? (
          <CreateTodo createTodoHandler={createTodoHandler} />
        ) : null}
      </div>
      <div>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.todoId} />;
        })}
      </div>
    </main>
  );
}

export { Main };
