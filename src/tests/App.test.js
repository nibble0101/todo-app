import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom"

/*eslint-disable */
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hello world");
  expect(linkElement).toBeInTheDocument();
});
