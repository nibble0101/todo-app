import React from "react";
import { getPreviewMessage } from "../../utils/preview-utils";
import PropTypes from "prop-types";
import "../../styles/PreviewTodo.css";
import {
  getWindowScrollFromTop,
  getWindowPlusScrollBarHeight
} from "../../utils/css-styles-utils";

// For styling preview if Todo's title or description is an empty string.
const invalidTodoStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "brown",
};

function PreviewTodo(props) {
  const { title, description, canSubmit } = getPreviewMessage(
    props.title,
    props.description
  );
  return (
    <div className="preview-wrapper">
      <div
        className="preview-overlay"
        style={{ top: `${getWindowScrollFromTop()}px` }}
      ></div>
      <div
        className="preview"
        style={{ top: `${getWindowScrollFromTop() + getWindowPlusScrollBarHeight() / 2}px` }}
      >
        <h1 className="preview__title"> {title} </h1>
        <p
          className="preview__description"
          style={canSubmit === false ? invalidTodoStyle : null}
        >
          {canSubmit === false
            ? "You cannot submit Todo with an empty title or description"
            : description}
        </p>
        <p>
          <button onClick={props.submitTodo} className="button">
            Submit
          </button>
          <button onClick={props.closePreview} className="button">
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
  closePreview: PropTypes.func,
  submitTodo: PropTypes.func,
};
export { PreviewTodo };
