// Utility functions to be used in reducer

/** 
* Adds a new todo object to list of todos
* @param {object}   App state
* @param {object}   New todo
* @returns {object} New state
*/
function addTodoUtil(state, newTodo) {
    const stateClone = {...state};
    stateClone.todos.push(newTodo)
    return JSON.parse(JSON.stringify(stateClone));
}

/** 
* Edits an existing todo
* @param {object}   App state
* @param {string}   Todo id
* @param {object}   Todo object containing changes
* @returns {object} New state 
*/

function editTodoUtil(state, todoId, changes) {
    const stateClone = {...state};
    const todoIndex = stateClone.todos.findIndex(todo => todo.todoId === todoId);
    if(todoIndex > -1){
       const updatedTodo = {...state.todos[todoIndex], ...changes};
       stateClone.todos[todoIndex] = updatedTodo;
    }
    return JSON.parse(JSON.stringify(stateClone));
}

/** 
* Delete an existing todo
* @param {object}   App state
* @param {string}   Todo id
* @returns {object} New state
*/
function deleteTodoUtil(state, todoId) {
    const stateClone = {...state};
    const todoIndex = stateClone.todos.findIndex(todo => todo.todoId === todoId);
    if(todoIndex > -1){
       stateClone.todos.splice(todoIndex, 1);
    }
    return JSON.parse(JSON.stringify(stateClone));
    
}

/** 
* Mark an existing todo completed
* @param {object}   App state
* @param {string}   Todo id
* @returns {object} New state
*/
function markCompletedUtil(state, todoId) {
    const stateClone = {...state};
    const todoIndex = stateClone.todos.findIndex(todo => todo.todoId === todoId);
    if(todoIndex > -1){
       stateClone.todos[todoIndex].completed = true;
    }
    return JSON.parse(JSON.stringify(stateClone)); 
}

/** 
* Reset time of an existing todo
* @param {object}   App state
* @param {string}   Todo id
* @param {integer}  Time in ms
* @returns {object} New state
*/
function setTimeUtil(state){
    return state
}
export { 
    addTodoUtil, 
    editTodoUtil, 
    deleteTodoUtil, 
    markCompletedUtil, 
    setTimeUtil };


