import { addTodoItem, deleteTodoItem, toggleTodoItem} from "components/todo/TodoActions";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "components/todo/TodoConstants";

describe("addTodoItem tests", (): void => {
    it("should be a function", (): void => {
        expect(typeof addTodoItem).toBe("function");
    });

    it("should return object with payload and type", (): void => {
        const result = addTodoItem("test");

        expect(result).toEqual({
            payload: "test",
            type: ADD_TODO
        });
    });
});

describe("deleteTodoItem tests", (): void => {
    it("should be a function", (): void => {
        expect(typeof deleteTodoItem).toBe("function");
    });

    it("should return object with payload and type", (): void => {
        const result = deleteTodoItem(1);

        expect(result).toEqual({
            payload: 1,
            type: DELETE_TODO
        });
    });
});

describe("toggleTodoItem tests", (): void => {
    it("should be a function", (): void => {
        expect(typeof toggleTodoItem).toBe("function");
    });

    it("should return object with payload and type", (): void => {
        const result = toggleTodoItem(1);

        expect(result).toEqual({
            payload: 1,
            type: TOGGLE_TODO
        });
    });
});
