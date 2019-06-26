import { ADD_TODO, DELETE_TODO, INITIAL_STATE, TOGGLE_TODO } from "components/todo/TodoConstants";
import { IAction } from "models/IAction";
import { ITodoItem } from "models/ITodoItem";

const todoReducer = (
    state: ITodoItem[] = INITIAL_STATE,
    action: IAction<ITodoItem | number | string>
): ITodoItem[] => {
    switch (action.type) {
        case ADD_TODO:
            const nameOfTheNewTodo = action.payload as string;
            if (state.some((i: ITodoItem): boolean => i.name === nameOfTheNewTodo)) {
                return state;
            }
            const newTodo: ITodoItem = {
                finished: false,
                id: Math.max(...state.map((i: ITodoItem): number => i.id), 0) + 1,
                name: action.payload as string,
            };
            return [...state, newTodo];
        case DELETE_TODO:
            return state.filter((i: ITodoItem): boolean => i.id !== (action.payload as number));
        case TOGGLE_TODO:
            const result = state.map((todoItem: ITodoItem): ITodoItem => {
                if (todoItem.id !== (action.payload as number)) {
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
