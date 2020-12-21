import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
  const { todo } = props;
  return (
    <section className="todo">
      <p>
        <span> {todo.title} </span>
        <span>
          <i className="far fa-trash-alt"></i>
        </span>
        <span>
          <i className="far fa-edit"></i>
        </span>
        <span>
        <i className="far fa-check-circle"></i>
        </span>
      </p>
      <p> {todo.description.slice(0, 100)}... </p>
    </section>
  );
}

Todo.propTypes = {
    todo: PropTypes.object
}
export { Todo };
