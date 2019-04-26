import { REDUCER_KEY, } from "components/todo/TodoConstants";
import { getTodos } from "components/todo/TodoSelectors";
import { ITodoItem } from "models/ITodoItem";
import { IAppState } from "models/IAppState";

describe("Todo selector tests", () => {
    const todos: ITodoItem[] = [
        { id: 1, finished: false, name: "First todo" }
    ];

    const appState: IAppState = {
        [REDUCER_KEY]: todos
    };
    it("Should return todo array for valid state", () => {
        const result = getTodos(appState);

        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(todos[0].id);
        expect(result[0].finished).toEqual(todos[0].finished);
        expect(result[0].name).toEqual(todos[0].name);
    });
});
