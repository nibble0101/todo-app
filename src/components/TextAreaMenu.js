import React from "react";

function TextAreaMenu() {
  return (
    <div className="text-area-menu-wrapper">
      <button className="button">
        <i className="fas fa-code"></i>
      </button>
      <button className="button">
        <i className="fas fa-italic"></i>
      </button>
      <button className="button">
        <i className="fas fa-bold"></i>
      </button>
      <button className="button">
        <i className="fas fa-link"></i>
      </button>
      <button className="button">
        <i className="fas fa-quote-right"></i>
      </button>
      <button className="button">
        <i className="fas fa-list-ul"></i>
      </button>
      <button className="button">
        <i className="fas fa-list-ol"></i>
      </button>
      <button className="button">
        <i className="far fa-calendar-alt"></i>
      </button>
      <button className="button">
        <i className="fas fa-icons"></i>
      </button>
    </div>
  );
}

export { TextAreaMenu };
