import CreateTodo from "components/todo/createTodo/CreateTodo";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

describe("TodoItem component test", (): void => {
    const mockedProps = {
        addTodoItem: jest.fn()
    };

    it("Should match CreateTodo snapshot", (): void => {
        const wrapper: ShallowWrapper = shallow(<CreateTodo {...mockedProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should set state when text is changed", (): void => {
        const wrapper: ShallowWrapper<{}, {}, CreateTodo> = shallow(
            <CreateTodo {...mockedProps} />
        );
        const instance = wrapper.instance();

        const setStateSpy = jest.spyOn(instance, "setState");

        instance.handleTextChange("test");

        expect(setStateSpy).toBeCalled();
        expect(setStateSpy).toHaveBeenCalledWith({ todoName: "test" });
    });

    it("Should call addTodoItem and set state when calling createTodoItem", (): void => {
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
