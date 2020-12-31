import React from "react";
import PropTypes from "prop-types";
import "../styles/EmitWarning.css";
import {
  getWindowScrollFromTop,
  getWindowPlusScrollBarHeight,
} from "../utils/css-styles-utils";

function EmitWarning(props) {
  const { warningText, toggleAboutToDeleteTodoFlag, deleteTodoHandler } = props;

  return (
    <div className="warning">
      <div
        className="warning__overlay"
        style={{ top: `${getWindowScrollFromTop()}px` }}
      ></div>
      <div
        className="warning-wrapper"
        style={{ top: `${getWindowScrollFromTop() + getWindowPlusScrollBarHeight() / 2}px` }}
      >
        <p className="warning__text">
          <i className="fas fa-exclamation-triangle"></i> {warningText}
        </p>
        <p className="warning__controls">
          <button className="button" onClick={deleteTodoHandler}>
            Yes Proceed
          </button>
          <button className="button" onClick={toggleAboutToDeleteTodoFlag}>
            Take Me Back
          </button>
        </p>
      </div>
    </div>
  );
}

EmitWarning.propTypes = {
  warningText: PropTypes.string,
  toggleAboutToDeleteTodoFlag: PropTypes.func,
  deleteTodoHandler: PropTypes.func,
};

export { EmitWarning };
