import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action-creators/action-creators";
import { PreviewTodo } from "./PreviewTodo";
import { createNewTodo } from "../../utils/create-todo-utils";
import { toggleBodyElementScroll } from "../../utils/css-styles-utils";
import PropTypes from "prop-types";

function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewOn, setPreviewOn] = useState(false);
  const dispatch = useDispatch();

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const previewHandle = () => {
    setPreviewOn((previewOn) => !previewOn);
    toggleBodyElementScroll();
  };
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    previewHandle();
  };
  const createNewTodoHandler = () => {
    if (title === "") {
      return;
    }
    if (description === "") {
      return; // Todo must have both Title and Description
    }
    const newTodo = createNewTodo(title, description, 0);
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
    previewHandle();
  };
  return (
    <section>
      <form className="create-todo">
        <div className="wrapper-with-top-margin">
          <label htmlFor="todo-title">Todo Title</label>
          <input
            id="todo-title"
            value={title}
            onChange={onChangeTitleHandler}
            name="todoTitle"
            type="text"
            className="create-todo__title-input block-user-input"
            placeholder="Enter Todo title"
          />
        </div>
        <div className="wrapper-with-top-margin">
          <label htmlFor="todo-description">Todo Description</label>
          <textarea
            id="todo-description"
            value={description}
            onChange={onChangeDescriptionHandler}
            name="todoDescription"
            className="create-todo__description-input block-user-input"
            placeholder="Enter Todo description. Markdown supported"
          ></textarea>
        </div>
      </form>
      <div className="wrapper-with-top-margin">
        <button onClick={onSubmitFormHandler} className="button">
          Create Todo
        </button>
        <button onClick={previewHandle} className="button">
          Open Preview
        </button>
        <button onClick={props.createTodoHandler} className="button">
          Discard Todo
        </button>
      </div>

      {previewOn === true ? (
        <PreviewTodo
          title={title}
          description={description}
          closePreview={previewHandle}
          submitTodo={createNewTodoHandler}
        />
      ) : null}
    </section>
  );
}

CreateTodo.propTypes = {
  createTodoHandler: PropTypes.func,
};
export { CreateTodo };
