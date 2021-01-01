import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../action-creators/action-creators";
import { EditTodo } from "./EditTodo";
import { Tooltip } from "./Tooltip";
import { EmitWarning } from "./EmitWarning";

function Todo(props) {
  const { todo } = props;
  const [editingTodo, setEditingTodo] = useState(false);
  const [aboutToDeleteTodo, setAboutToDeleteTodo] = useState(false);
  const dispatch = useDispatch();

  function deleteTodoHandler() {
    dispatch(deleteTodo(todo.todoId));
    toggleAboutToDeleteTodoFlag();
  }
  function editTodoHandler() {
    setEditingTodo((editingTodo) => !editingTodo);
  }
  function toggleAboutToDeleteTodoFlag() {
    setAboutToDeleteTodo((deleteTodoFlag) => !deleteTodoFlag);
    const body = document.querySelector("body");
    body.classList.toggle("disable-scroll");
  }
  if (editingTodo === true) {
    return <EditTodo editTodoHandler={editTodoHandler} todo={todo} />;
  }
  return (
    <section className="todo">
      <div className="todo-heading">
        <p>
          <span> {todo.title} </span>
        </p>
        <p className="todo-heading__menu">
          <button
            onClick={toggleAboutToDeleteTodoFlag}
            className="button tooltip-wrapper"
          >
            <i className="far fa-trash-alt"></i>
            <Tooltip tooltipText="Delete Todo" />
          </button>
          <button onClick={editTodoHandler} className="button tooltip-wrapper">
            <i className="far fa-edit"></i>
            <Tooltip tooltipText="Edit Todo" />
          </button>
          <button className="button tooltip-wrapper">
            <i className="far fa-check-circle"></i>
            <Tooltip tooltipText="Mark Completed" />
          </button>
        </p>
      </div>
      <p className="todo-description"> {todo.description} </p>
      {aboutToDeleteTodo === true ? (
        <EmitWarning
          toggleAboutToDeleteTodoFlag={toggleAboutToDeleteTodoFlag}
          deleteTodoHandler = {deleteTodoHandler}
          warningText= "You are about to perform an irreversible action. What would you like us do?"
        />
      ) : null}
    </section>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
};
export { Todo };
