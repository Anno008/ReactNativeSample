import { IAction } from "../../models/IAction";
import {
  ADD_TODO,
  TOGGLE_TODO,
  INITIAL_STATE,
  DELETE_TODO
} from "./TodoConstants";
import { ITodoItem } from "../../models/ITodoItem";

const todoReducer = (
  state: ITodoItem[] = INITIAL_STATE,
  action: IAction<ITodoItem | number | string>
): ITodoItem[] => {
  switch (action.type) {
    case ADD_TODO:
      const nameOfTheNewTodo = action.payload as string;
      if (state.some(i => i.name === nameOfTheNewTodo)) {
        return state;
      }
      const newTodo: ITodoItem = {
        id: Math.max(...state.map(i => i.id)) + 1,
        name: action.payload as string,
        finished: false
      };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter(i => i.id !== (action.payload as number));
    case TOGGLE_TODO:
      const result = state.map(todoItem => {
        if (todoItem.name !== (action.payload as ITodoItem).name) {
          return todoItem;
        }
        todoItem.finished = !todoItem.finished;
        return todoItem;
      });
      return result;
    default:
      return state;
  }
};

export default todoReducer;
