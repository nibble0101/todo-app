import React from "react";

function Header() {
  return (
    <header className = "header">
      <span className = "header__logo"><i className="fas fa-list-ul"></i></span>
      <span className = "header__text"> Todo app </span>
    </header>
  );
}

export { Header };
