import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../action-creators/action-creators";
import { PreviewTodo } from "./PreviewTodo";
import { createNewTodo } from "../utils/create-todo-utils";

function CreateTodo() {
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
  };
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    setPreviewOn(previewOn => !previewOn);
  }
  const createNewTodoHandler = () => {
    if (title === "" || description === ""){
      return; // Must have title or description
    } 
    const newTodo = createNewTodo(title, description, 0);
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
    previewHandle();
  };
  return (
    <section style = {{position: "relative"}}>
      <form onSubmit={onSubmitFormHandler}>
        <div>
          <label htmlFor="todo-title">Todo Title</label>
          <input
            id="todo-title"
            value={title}
            onChange={onChangeTitleHandler}
            name="todoTitle"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="todo-description">Todo Description</label>
          <textarea
            id="todo-description"
            value={description}
            onChange={onChangeDescriptionHandler}
            name="todoDescription"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Create Todo" />
        </div>
        <div><button> {previewOn === true ? "Close Preview" : "Open Preview"} </button></div>
      </form>
      
      {previewOn === true ? (
        <PreviewTodo
          title={title}
          description={description}
          previewHandle={previewHandle}
          createNewTodoHandler = { createNewTodoHandler }
        />
      ) : null}
    </section>
  );
}

export { CreateTodo };
