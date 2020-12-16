import React from "react";
import PropTypes from "prop-types";

function NewTodo(props) {
    return <p> <button onClick = {props.createTodoHandler}> Create New Todo </button></p>
    
}

NewTodo.propTypes = {
    createTodoHandler: PropTypes.func
}
export { NewTodo };