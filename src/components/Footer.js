import React from "react";

const gitHubUrl = "https://github.com/nible0101";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>
        Copyright &copy;{" "}
        <a href={gitHubUrl} className="footer__link">
         Mawa
        </a>{" "}
        {currentYear > 2020 ? `2020 - ${currentYear}` : currentYear}
      </p>
    </footer>
  );
}

export { Footer };
