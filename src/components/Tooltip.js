import React from "react";
import PropTypes from "prop-types";

function Tooltip(props) {
  const { tooltipText } = props;
  return <span className="tooltip-wrapper__text"> {tooltipText} </span>;
}

Tooltip.propTypes = {
  tooltipText: PropTypes.string,
};
export { Tooltip };
