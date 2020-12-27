import React from "react";
import PropTypes from "prop-types";
import "../styles/PreviewTodo.css";

// For styling preview if Todo is empty
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "brown"
};

function PreviewTodo(props) {
  return (
    <div className="preview-wrapper">
      <div className="preview-overlay"></div>
      <div className="preview">
        <h1 className="preview__title"> {props.title} </h1>
        <p
          className="preview__description"
          style={props.description === "" ? style : null}
        >
          {props.description === ""
            ? "You cannot submit an empty todo"
            : props.description}
        </p>
        <p>
          <button onClick={props.createNewTodoHandler} className="button">
            Submit
          </button>
          <button onClick={props.previewHandle} className="button">
            Edit
          </button>
        </p>
      </div>
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
