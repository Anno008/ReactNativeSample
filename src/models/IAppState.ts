import { REDUCER_KEY as todoReducerKey } from "components/todo/TodoConstants";
import { ITodoItem } from "models/ITodoItem";

export interface IAppState {
    [todoReducerKey]: ITodoItem[];
}
