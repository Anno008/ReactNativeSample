import { REDUCER_KEY } from "components/todo/TodoConstants";
import { ITodoItem } from "models/ITodoItem";
import { IAppState } from "store/IAppState";

export const getTodos = (state: IAppState): ITodoItem[] => state[REDUCER_KEY];
