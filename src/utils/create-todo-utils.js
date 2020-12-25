import { v4 as uuidv4 } from "uuid";
import { getCurrentTime } from "./date-utils";



function createNewTodo(title, description, endAt) {
  return {
    todoId: uuidv4(),
    title,
    description,
    createdAt: getCurrentTime(),
    startAt: getCurrentTime(),
    endAt,
    completed: false
  };
}

export { createNewTodo };
