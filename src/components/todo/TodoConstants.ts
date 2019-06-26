import { ITodoItem } from "models/ITodoItem";

export const REDUCER_KEY = "Todo";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const INITIAL_STATE: ITodoItem[] = [
    { id: 1, name: "Eat", finished: false },
    { id: 2, name: "Sleep", finished: false },
    { id: 3, name: "Work", finished: false }
];
