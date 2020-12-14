import React from "react";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state);
  return (
    <div className="app">
       Hello world { todos[0]}
    </div>
  );
}


export default App;
