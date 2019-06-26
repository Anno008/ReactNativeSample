import { TodoItem } from "components/todo/todoItem/TodoItem";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Button, TouchableOpacity } from "react-native";

describe("TodoItem component test", (): void => {
    // Arrange on top as not to repeat it in every test case
    const mockTodoItem = {
        finished: false,
        id: 1,
        name: "test"
    };
    const mockedProps = {
        deleteTodo: jest.fn(),
        todo: mockTodoItem,
        toggleTodo: jest.fn()
    };

    it("Should match TodoItem snapshot with finished set to false", (): void => {
        const wrapper: ShallowWrapper = shallow(<TodoItem {...mockedProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should match TodoItem snapshot with finished set to true", (): void => {
        const finishedTodoProps =  { ...mockedProps, todo: {...mockedProps.todo, finished: true}};

        const wrapper: ShallowWrapper = shallow(<TodoItem {...finishedTodoProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Should call toggleTodo on press", (): void => {
        const wrapper: ShallowWrapper = shallow(<TodoItem {...mockedProps} />);

        wrapper.find(TouchableOpacity).simulate("press");

        expect(mockedProps.toggleTodo).toBeCalled();
        expect(mockedProps.toggleTodo).toBeCalledWith(mockedProps.todo.id);
    });

    it("Should call deleteTodo on button press", (): void => {
        const wrapper: ShallowWrapper = shallow(<TodoItem {...mockedProps} />);

        wrapper.find(Button).simulate("press");

        expect(mockedProps.deleteTodo).toBeCalled();
        expect(mockedProps.deleteTodo).toBeCalledWith(mockedProps.todo.id);
    });
});
