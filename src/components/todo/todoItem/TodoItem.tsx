import styles from "components/todo/todoItem/TodoItemStyle";
import { ITodoItem } from "models/ITodoItem";
import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { View as AnimatedView } from "react-native-animatable";

interface IProps {
  todo: ITodoItem;
  toggleTodo: (todoItem: ITodoItem) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.SFC<IProps> = (props: IProps) => {
  const { todo, toggleTodo, deleteTodo } = props;
  const { finished, name, id } = todo;

  const strikeOutStyle = finished ? styles.strikeout : null;
  const toggleTodoHandler = () => toggleTodo(todo);
  const deleteTodoHandler = () => deleteTodo(id);

  return (
    <AnimatedView animation="fadeInLeft">
      <TouchableOpacity style={styles.container} onPress={toggleTodoHandler}>
        <Text style={[styles.text, strikeOutStyle]}>{name}</Text>
        <Button title="Delete" onPress={deleteTodoHandler} />
      </TouchableOpacity>
    </AnimatedView>
  );
};
