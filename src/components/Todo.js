import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../action-creators/action-creators";
import { EditTodo } from "./EditTodo";

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
    return <EditTodo editTodoHandler = { editTodoHandler} todo = { todo } />;
  }
  return (
    <section className="todo">
      <p>
        <span> {todo.title} </span>
        <span onClick={deleteTodoHandler}>
          <i className="far fa-trash-alt"></i>
        </span>
        <span onClick={editTodoHandler}>
          <i className="far fa-edit"></i>
        </span>
        <span>
          <i className="far fa-check-circle"></i>
        </span>
      </p>
      <p> {todo.description} </p>
    </section>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
};
export { Todo };
