import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { ITodoItem } from "../../../models/ITodoItem";
import styles from "./TodoItemStyle";

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
    <View animation="fadeInLeft">
      <TouchableOpacity style={styles.container} onPress={toggleTodoHandler}>
        <Text style={[styles.text, strikeOutStyle]}>{name}</Text>
        <Button title="Delete" onPress={deleteTodoHandler} />
      </TouchableOpacity>
    </View>
  );
};
