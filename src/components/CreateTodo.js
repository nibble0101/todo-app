import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../action-creators/action-creators";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    const todo = {
      todoId: uuidv4(),
      title,
      description,
      createdAt: new Date(),
      startAt: 0,
      endAt: 0,
      completed: false,
    };
    if(!title || !description) return; // Must have title or description
    dispatch(addTodo(todo));
    setTitle("");
    setDescription("");
  };
  return (
    <section>
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
      </form>
    </section>
  );
}

export { CreateTodo };
