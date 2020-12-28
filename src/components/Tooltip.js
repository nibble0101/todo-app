import React from "react";
import PropTypes from "prop-types";

function Tooltip(props) {
  const { tooltipText } = props;
  return (
    <span className="tool-tip-wrapper">
      <span className="tool-tip-wrapper__text"> {tooltipText} </span>
    </span>
  );
}

Tooltip.propTypes = {
  tooltipText: PropTypes.string,
};
export { Tooltip };
