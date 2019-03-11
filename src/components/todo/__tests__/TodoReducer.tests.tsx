import { ADD_TODO, DELETE_TODO, INITIAL_STATE, TOGGLE_TODO } from "components/todo/TodoConstants";
import TodoReducer from "components/todo/TodoReducer";
import { IAction } from "models/IAction";
import { ITodoItem } from "models/ITodoItem";

describe("TodoReducer tests", () => {
    it("should be a function", () => {
        expect(typeof TodoReducer).toEqual("function");
    });

    it("Should initialize with initial state", () => {
        expect(TodoReducer(undefined, {
            payload: "Test",
            type: "Test",
        })).toEqual(INITIAL_STATE);
    });

    it("Should return previous state if no matching action was found", () => {
        const initialState: ITodoItem[] = [];

        const firstState = TodoReducer(initialState, {
            payload: "First todo",
            type: ADD_TODO,
        });

        const nextState = TodoReducer(firstState, {
            payload: "BLA BLA",
            type: "Wrong Action",
        });

        expect(firstState.length).toEqual(1);
        expect(firstState).toEqual(nextState);
    });

    it("Should add todo item to previous array", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "First todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: "Second todo",
            type: ADD_TODO,
        });

        expect(result.length).toEqual(2);
    });

    it("Should not add todo item to previous array if the item with the same name already exist", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "Todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: "Todo item",
            type: ADD_TODO,
        });

        expect(result.length).toEqual(1);
    });

    it("Should remove todo item if the id matches", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "First todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: 1,
            type: DELETE_TODO,
        });

        expect(result.length).toEqual(0);
    });

    it("Should not remove todo item if the id does not match", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "First todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: 4,
            type: DELETE_TODO,
        });

        expect(result.length).toEqual(1);
    });

    it("Should toggle finished flag if the id matches", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "First todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: 1,
            type: TOGGLE_TODO,
        });

        expect(result.length).toEqual(1);
        expect(result[0].finished).toBeFalsy();
    });

    it("Should not toggle finished flag if the the id does not match", () => {
        const initialState: ITodoItem[] = [
            {id: 1, finished: true, name: "First todo item"}
        ];

        const result = TodoReducer(initialState, {
            payload: 2,
            type: TOGGLE_TODO,
        });

        expect(result.length).toEqual(1);
        expect(result[0].finished).toBeTruthy();
    });
});
