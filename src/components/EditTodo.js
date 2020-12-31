import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editTodo } from "../action-creators/action-creators";
import { PreviewTodo } from "./PreviewTodo";

function EditTodo(props) {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(props.todo.title);
  const [editedDescription, setEditedDescription] = useState(
    props.todo.description
  );
  const [previewOn, setPreviewOn] = useState(false);
  function submitEditedTodo(event) {
    event.preventDefault();
    const changes = {
      title: editedTitle,
      description: editedDescription,
    };
    dispatch(editTodo(props.todo.todoId, changes));
    props.editTodoHandler();
    const body = document.querySelector("body");
    body.classList.toggle("disable-scroll");
  }
  function editTitle(event) {
    setEditedTitle(event.target.value);
  }
  function editDescription(event) {
    setEditedDescription(event.target.value);
  }
  function displayPreview() {
    setPreviewOn((previewFlag) => !previewFlag);
    const body = document.querySelector("body");
    body.classList.toggle("disable-scroll");
  }
  function discardChanges() {
    props.editTodoHandler();
    if (previewOn === true) {
      const body = document.querySelector("body");
      body.classList.toggle("disable-scroll");
    }
  }
  return (
    <div>
      <form className="edit-todo">
        <div className="wrapper-with-top-margin">
          <label htmlFor="edit-todo-header">Edit Todo Header</label>
          <input
            type="text"
            id="edit-todo-header"
            value={editedTitle}
            onChange={editTitle}
            className="edit-todo__header-input block-user-input"
          />
        </div>
        <div className="wrapper-with-top-margin">
          <label htmlFor="edit-todo-description">Edit Todo Description</label>
          <textarea
            id="edit-todo-description"
            value={editedDescription}
            onChange={editDescription}
            className="edit-todo__description-input block-user-input"
          />
        </div>
      </form>
      <div className="wrapper-with-top-margin">
        <button className="button" onClick={displayPreview}>
          Submit
        </button>
        <button onClick={discardChanges} className="button">
          Discard changes
        </button>
      </div>
      {previewOn === true ? (
        <PreviewTodo
          title={editedTitle}
          description={editedDescription}
          submitTodo={submitEditedTodo}
          closePreview={discardChanges}
        />
      ) : null}
    </div>
  );
}

EditTodo.propTypes = {
  editTodoHandler: PropTypes.func,
  todo: PropTypes.object,
};
export { EditTodo };
