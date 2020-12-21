import { 
    ADD_TODO, 
    EDIT_TODO, 
    DELETE_TODO, 
    MARK_COMPLETED, 
    SET_TIME 
} from "../actions/actions";
import { 
    addTodoUtil, 
    editTodoUtil, 
    deleteTodoUtil, 
    markCompletedUtil, 
    setTimeUtil 
} from "../utils/reducer-utils";

import { v4 as uuidv4 } from "uuid";
import  initialState from "../todo.js";


/*
  Shape of todoObject
  {
      todoId: uuidv4(),
      title:'',
      descritption: '',
      createdAt: new Date(),
      startAt: '',module, 
      endAt: '',
      completed: false

  }
*/

initialState.todos.forEach(todo => {
    todo.todoId = uuidv4();
    todo.createdAt = new Date();
})

const todoReducer = (state = JSON.parse(JSON.stringify(initialState,)),  action) => {
      const { type } = action;
      switch(type){
          case ADD_TODO:
              return addTodoUtil(state, action.todo);
          case EDIT_TODO:
              return editTodoUtil(state, action.todoId, action.changes);
          case DELETE_TODO:
              return deleteTodoUtil(state, action.todoId);
          case MARK_COMPLETED:
              return markCompletedUtil(state, action.todoId);
          case SET_TIME:
              return setTimeUtil(state);
          default:
              return state;

      }
}


export { todoReducer };