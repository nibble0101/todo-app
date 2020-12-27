import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editTodo } from "../action-creators/action-creators";

function EditTodo(props) {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(props.todo.title);
  const [editedDescription, setEditedDescription] = useState(
    props.todo.description
  );
  function submitEditedTodoHandler(event) {
    event.preventDefault();
    const changes = {
      title: editedTitle,
      description: editedDescription,
    };
    dispatch(editTodo(props.todo.todoId, changes));
    props.editTodoHandler();
  }
  function editTitleHandler(event) {
    setEditedTitle(event.target.value);
  }
  function editDescriptionHandler(event) {
    setEditedDescription(event.target.value);
  }
  function discardChanges() {
    props.editTodoHandler()
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="edit-todo-header">Edit Todo Header</label>
          <input
            type="text"
            id="edit-todo-header"
            value={editedTitle}
            onChange={editTitleHandler}
          />
        </div>
        <div>
          <label htmlFor="edit-todo-description">Edit Todo Description</label>
          <textarea
            id="edit-todo-description"
            value={editedDescription}
            onChange={editDescriptionHandler}
          />
        </div>
      </form>
      <div className = "wrapper-with-top-margin">
         <button className = "button" onClick={submitEditedTodoHandler}> Submit </button>
         <button onClick = { discardChanges } className = "button"> Discard changes </button>
      </div>
     
    </div>
  );
}

EditTodo.propTypes = {
  editTodoHandler: PropTypes.func,
  todo: PropTypes.object,
};
export { EditTodo };
