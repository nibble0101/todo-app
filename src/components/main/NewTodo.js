import React from "react";
import PropTypes from "prop-types";

function NewTodo(props) {
  return (
    <p>
      <button onClick={props.createTodoHandler} className = "button">Create New Todo</button>
    </p>
  );
}

NewTodo.propTypes = {
  createTodoHandler: PropTypes.func
};
export { NewTodo };
