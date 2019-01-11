import { IAction } from "../../models/IAction";
import { ITodoItem } from "../../models/ITodoItem";
import {
  ADD_TODO,
  DELETE_TODO,
  INITIAL_STATE,
  TOGGLE_TODO,
} from "./TodoConstants";

const todoReducer = (
  state: ITodoItem[] = INITIAL_STATE,
  action: IAction<ITodoItem | number | string>
): ITodoItem[] => {
  switch (action.type) {
    case ADD_TODO:
      const nameOfTheNewTodo = action.payload as string;
      if (state.some((i: ITodoItem) => i.name === nameOfTheNewTodo)) {
        return state;
      }
      const newTodo: ITodoItem = {
        finished: false,
        id: Math.max(...state.map((i: ITodoItem) => i.id)) + 1,
        name: action.payload as string,
      };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((i: ITodoItem) => i.id !== (action.payload as number));
    case TOGGLE_TODO:
      const result = state.map((todoItem: ITodoItem) => {
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
