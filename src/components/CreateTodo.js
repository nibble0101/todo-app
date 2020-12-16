import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const onSubmitFormHandler = (event) => { 
      event.preventDefault();
      setTitle("");
      setDescription("");
      uuidv4();

  }
  return (
    <section>
      <form onSubmit = {onSubmitFormHandler}>
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
