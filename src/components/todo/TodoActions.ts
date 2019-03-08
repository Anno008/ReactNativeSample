import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "components/todo/TodoConstants";
import { IAction } from "models/IAction";
import { ITodoItem } from "models/ITodoItem";

export const addTodoItem = (todoName: string): IAction<string> => ({
  payload: todoName,
  type: ADD_TODO
});

export const deleteTodoItem = (id: number): IAction<number> => ({
  payload: id,
  type: DELETE_TODO
});

export const toggleTodoItem = (todo: ITodoItem): IAction<ITodoItem> => ({
  payload: todo,
  type: TOGGLE_TODO
});
