import { ITodoItem } from "../../models/ITodoItem";
import { IAppState } from "../../store/IAppState";
import { REDUCER_KEY } from "./TodoConstants";

export const getTodos = (state: IAppState): ITodoItem[] => state[REDUCER_KEY];
