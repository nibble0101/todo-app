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
const obj = {
    todoId: uuidv4(),
    title:"First Todo",
    description: "This is for testing the app",
    createdAt: new Date(),
    startAt: new Date(), 
    endAt: new Date,
    completed: false

}
const initialState = {todos: [obj], lastUpdated: 0 };

const todoReducer = (state = initialState, action) => {
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