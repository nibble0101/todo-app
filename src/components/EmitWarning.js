import React from "react";
import PropTypes from "prop-types";
import "../styles/EmitWarning.css";

function EmitWarning(props) {
  const { warningText, toggleAboutToDeleteTodoFlag, deleteTodoHandler } = props;
  function scrollTop() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    }
    return (
      document.documentElement ||
      document.body.parentNode ||
      document.body
    ).scrollTop;
  }
  return (
    <div className="warning">
      <div className="warning__overlay" style = {{top: scrollTop()}}></div>
      <div className="warning-wrapper">
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
