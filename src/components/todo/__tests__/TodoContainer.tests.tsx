import { REDUCER_KEY } from "components/todo/TodoConstants";
import TodoContainer, { mapStateToProps } from "components/todo/TodoContainer";
import { ITodoItem } from "models/ITodoItem";
import { IAppState } from "store/IAppState";

describe("Todo container tests", () => {
  it("Should be a function", () => {
    expect(typeof TodoContainer).toEqual("function");
  });

  it("Should return valid object", () => {
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
