import { REDUCER_KEY } from "components/todo/TodoConstants";
import TodoContainer, { mapStateToProps } from "components/todo/TodoContainer";
import { ITodoItem } from "models/ITodoItem";
import { IAppState } from "models/IAppState";

describe("Todo container tests", (): void => {
    it("Should be a function", (): void => {
        expect(typeof TodoContainer).toEqual("object");
    });

    it("Should extract the required object from app state", (): void => {
        const todos: ITodoItem[] = [
            { id: 1, finished: false, name: "Todo item" }
        ];
        const appState: IAppState = {
            [REDUCER_KEY]: todos
        };
        const result = mapStateToProps(appState);

        expect(result.todos).toEqual(todos);
    });
});
