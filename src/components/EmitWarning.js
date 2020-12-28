import React from "react";
import PropTypes from "prop-types";
import "../styles/EmitWarning.css";

function EmitWarning(props) {
  const { warningText, toggleAboutToDeleteTodoFlag, deleteTodoHandler } = props;
  return (
    <div className="warning">
      <div className="warning__overlay"></div>
      <div className = "warning-wrapper">
        <p className="warning__text"> {warningText} </p>
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
