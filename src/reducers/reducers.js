import { 
    ADD_TODO, 
    EDIT_TODO, 
    DELETE_TODO, 
    MARK_COMPLETED, 
    SET_TIME } from "../actions/actions";


const initialState = ["Testing"];

const todoReducer = (state = initialState, action) => {
      const { type } = action;
      switch(type){
          case ADD_TODO:
              return state.concat(action.todo);
          case EDIT_TODO:
              return state;
          case DELETE_TODO:
              return state;
          case MARK_COMPLETED:
              return state;
          case SET_TIME:
              return state;
          default:
              return state;

      }
}


export { todoReducer };