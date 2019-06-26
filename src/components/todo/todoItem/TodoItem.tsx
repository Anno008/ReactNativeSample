import styles from "components/todo/todoItem/TodoItemStyle";
import { ITodoItem } from "models/ITodoItem";
import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { View as AnimatedView } from "react-native-animatable";

interface Props {
    todo: ITodoItem;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoItem: React.SFC<Props> = (props: Props): JSX.Element => {
    const { todo, toggleTodo, deleteTodo } = props;
    const { finished, name, id } = todo;

    const strikeOutStyle = finished ? styles.strikeout : null;
    const toggleTodoHandler = (): void => toggleTodo(id);
    const deleteTodoHandler = (): void => deleteTodo(id);

    return (
        <AnimatedView animation="fadeInLeft">
            <TouchableOpacity style={styles.container} onPress={toggleTodoHandler}>
                <Text style={[styles.text, strikeOutStyle]}>{name}</Text>
                <Button title="Delete" onPress={deleteTodoHandler} />
            </TouchableOpacity>
        </AnimatedView>
    );
};
