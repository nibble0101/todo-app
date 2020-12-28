import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../action-creators/action-creators";
import { EditTodo } from "./EditTodo";
import { Tooltip } from "./Tooltip";

function Todo(props) {
  const { todo } = props;
  const [editingTodo, setEditingTodo] = useState(false);
  const dispatch = useDispatch();

  function deleteTodoHandler() {
    dispatch(deleteTodo(todo.todoId));
  }
  function editTodoHandler() {
    setEditingTodo((editingTodo) => !editingTodo);
  }
  if (editingTodo === true) {
    return <EditTodo editTodoHandler={editTodoHandler} todo={todo} />;
  }
  return (
    <section className="todo">
      <p className="todo-heading">
        <div>
          <span> {todo.title} </span>
        </div>
        <div>
          <button onClick={deleteTodoHandler} className="button tool-tip-wrapper">
            <i className="far fa-trash-alt"></i>
            <Tooltip tooltipText = "Delete Todo" />
          </button>
          <button onClick={editTodoHandler} className="button tool-tip-wrapper">
            <i className="far fa-edit"></i>
            <Tooltip tooltipText = "Edit Todo"/>
          </button>
          <button className="button tool-tip-wrapper">
            <i className="far fa-check-circle"></i>
            <Tooltip tooltipText = "Mark Completed"/>
          </button>
        </div>
      </p>
      <p className="todo-description"> {todo.description} </p>
    </section>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
};
export { Todo };
