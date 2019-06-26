import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

import CreateTodo from "components/todo/createTodo";
import { TodoItem } from "components/todo/todoItem/TodoItem";
import styles from "components/todo/TodoStyle";
import { ITodoItem } from "models/ITodoItem";

interface Props {
    todos: ITodoItem[];
    toggleTodoItem: (id: number) => void;
    deleteTodoItem: (id: number) => void;
}

export class Todo extends Component<Props> {
    scrollView: React.RefObject<ScrollView>;

    constructor(props: Props) {
        super(props);
        this.scrollView = React.createRef<ScrollView>();
    }

    render(): JSX.Element {
        const { todos } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Todos</Text>
                {this.renderTodos(todos)}
                <CreateTodo />
            </View>
        );
    }

    renderTodos = (todos: ITodoItem[]): JSX.Element => (
        <ScrollView
            contentContainerStyle={styles.scrollViewStyle}
            style={styles.todoContainer}
            ref={this.scrollView}
            onContentSizeChange={this.scrollToBottom}
        >
            {todos.map((todoItem: ITodoItem): JSX.Element => (
                <TodoItem
                    key={todoItem.id}
                    todo={todoItem}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
            ))}
        </ScrollView>
    )

    toggleTodo = (id: number): void => this.props.toggleTodoItem(id);

    deleteTodo = (id: number): void => this.props.deleteTodoItem(id);

    scrollToBottom = (): void => {
        if (this.scrollView.current) {
            this.scrollView.current.scrollToEnd();
        }
    }
}

export default Todo;
