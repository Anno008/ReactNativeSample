import Todo from "components/todo/Todo";
import { TodoItem } from "components/todo/todoItem/TodoItem";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("Todo component test", () => {
  // Arrange on top as not to repeat it in every test case
  const mockTodoItem = {
    finished: false,
    id: 1,
    name: "test"
  };
  const mockProps = {
    deleteTodoItem: jest.fn(),
    todos: [mockTodoItem],
    toggleTodoItem: jest.fn()
  };

  it("should render", () => {
    const wrapper: ShallowWrapper = shallow(<Todo {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggle todo on child action", () => {
    const wrapper: ShallowWrapper = shallow(<Todo {...mockProps} />);

    wrapper.find(TodoItem).prop("toggleTodo")(mockTodoItem.id);

    expect(mockProps.toggleTodoItem).toBeCalled();
    expect(mockProps.toggleTodoItem).toBeCalledWith(mockTodoItem.id);
  });

  it("should call delete todo on child action", () => {
    const wrapper: ShallowWrapper = shallow(<Todo {...mockProps} />);

    wrapper.find(TodoItem).prop("deleteTodo")(mockTodoItem.id);

    expect(mockProps.deleteTodoItem).toBeCalled();
    expect(mockProps.deleteTodoItem).toBeCalledWith(mockTodoItem.id);
  });
});
