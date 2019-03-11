import { addTodoItem, deleteTodoItem, toggleTodoItem} from "components/todo/TodoActions";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "components/todo/TodoConstants";

describe("addTodoItem tests", () => {
  it("should be a function", () => {
   expect(typeof addTodoItem).toBe("function");
  });

  it("should return object with payload and type", () => {
      const result = addTodoItem("test");

      expect(result).toEqual({
          payload: "test",
          type: ADD_TODO
      });
  });
});

describe("deleteTodoItem tests", () => {
    it("should be a function", () => {
     expect(typeof deleteTodoItem).toBe("function");
    });

    it("should return object with payload and type", () => {
        const result = deleteTodoItem(1);

        expect(result).toEqual({
            payload: 1,
            type: DELETE_TODO
        });
    });
  });

describe("toggleTodoItem tests", () => {
    it("should be a function", () => {
     expect(typeof toggleTodoItem).toBe("function");
    });

    it("should return object with payload and type", () => {
        const result = toggleTodoItem(1);

        expect(result).toEqual({
            payload: 1,
            type: TOGGLE_TODO
        });
    });
  });
