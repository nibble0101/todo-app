import React from "react";
import PropTypes from "prop-types";

function PreviewTodo(props) {
  return (
    <div style={{ position: "absolute", top: "0", left: "0", zIndex: "10", backgroundColor:"grey" }}>
      <h1> {props.title} </h1>
      <p> {props.description} </p>
      <p>
        <button onClick={props.createNewTodoHandler}> Submit </button>
        <button onClick={props.previewHandle}> Edit </button>
      </p>
    </div>
  );
}

PreviewTodo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  previewHandle: PropTypes.func,
  createNewTodoHandler: PropTypes.func,
};
export { PreviewTodo };
