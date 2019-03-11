import CreateTodo from "components/todo/CreateTodo/CreateTodo";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("TodoItem component test", () => {
  const mockedProps = {
    addTodoItem: jest.fn()
  };

  it("should render create todo component", () => {
    const wrapper: ShallowWrapper = shallow(<CreateTodo {...mockedProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should set state when text is changed", () => {
    const wrapper: ShallowWrapper<{}, {}, CreateTodo> = shallow(
      <CreateTodo {...mockedProps} />
    );
    const instance = wrapper.instance();

    const setStateSpy = jest.spyOn(instance, "setState");

    instance.handleTextChange("test");

    expect(setStateSpy).toBeCalled();
    expect(setStateSpy).toHaveBeenCalledWith({ todoName: "test" });
  });

  it("should call addTodoItem and set state when calling createTodoItem", () => {
    const wrapper: ShallowWrapper<{}, {}, CreateTodo> = shallow(<CreateTodo {...mockedProps} />);
    const instance = wrapper.instance();

    const todoName = "test todo item";
    instance.setState({ todoName });

    const setStateSpy = jest.spyOn(instance, "setState");
    instance.createTodoItem();

    expect(mockedProps.addTodoItem).toBeCalledWith(todoName);
    expect(setStateSpy).toHaveBeenCalledWith({ todoName: "" });
  });
});
