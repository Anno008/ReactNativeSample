import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "components/todo/TodoConstants";
import { IAction } from "models/IAction";

export const addTodoItem = (todoName: string): IAction<string> => ({
    payload: todoName,
    type: ADD_TODO
});

export const deleteTodoItem = (id: number): IAction<number> => ({
    payload: id,
    type: DELETE_TODO
});

export const toggleTodoItem = (id: number): IAction<number> => ({
    payload: id,
    type: TOGGLE_TODO
});
