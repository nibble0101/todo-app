import { ADD_TODO, EDIT_TODO, DELETE_TODO, MARK_COMPLETED, SET_TIME } from "../actions/actions";

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}; 

const editTodo = (todoId, newTodo) => {
    return {
        type: EDIT_TODO,
        todoId,
        newTodo
    }
}

const  deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        todoId
    }
}

const markCompleted = (todoId) => {
    return {
        type: MARK_COMPLETED,
        todoId
    }
}

const setTime = (todoId) => {
    return {
        type: SET_TIME,
        todoId
    }
}

export {addTodo, editTodo, deleteTodo, markCompleted, setTime};
